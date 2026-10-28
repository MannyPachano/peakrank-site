#!/usr/bin/env node
/**
 * Smoke test over dist/ after a build.
 *
 * Every page on this site is a raw HTML string handed to set:html, so a build
 * that silently drops four homepage sections, leaks a placeholder comment, or
 * ships a legal placeholder still exits 0. This is what catches that.
 *
 * Wired into `npm run build`, so Netlify runs it on every deploy.
 */
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const DIST = "dist";
const errors = [];
const warnings = [];

function fail(page, msg) {
  errors.push(`${page}: ${msg}`);
}

function walk(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry);
    return statSync(full).isDirectory() ? walk(full) : [full];
  });
}

if (!existsSync(DIST)) {
  console.error("verify-build: dist/ does not exist. Run the build first.");
  process.exit(1);
}

const pages = walk(DIST).filter((f) => f.endsWith(".html"));

if (pages.length === 0) {
  console.error("verify-build: no HTML pages found in dist/.");
  process.exit(1);
}

/** Pages that must exist, and a string that proves the page actually rendered. */
const REQUIRED = {
  "dist/index.html": ["final-cta", "testimonials", "home-pricing", "class=\"offer\"", "performance"],
  "dist/about.html": ["founder", "process", "team", "testimonials"],
  "dist/pricing.html": ["plan-name", "plan-price"],
  "dist/contact.html": ["data-netlify", "form-name"],
  // Was "owner-photo-inline" until the initials badge was removed. These two
  // are the spliced-in components, so they still prove the partial rendered.
  "dist/web-design.html": ["areas-served", "cross-link"],
  "dist/local-seo.html": ["areas-served", "cross-link"],
  "dist/blog.html": ["blog-index-grid"],
  "dist/terms.html": ["guarantee"],
  "dist/privacy.html": ["Service providers"],
  "dist/404.html": ["error-title"],
  "dist/thanks.html": ["page-header"],
};

for (const [page, needles] of Object.entries(REQUIRED)) {
  if (!existsSync(page)) {
    fail(page, "missing from the build");
    continue;
  }
  const html = readFileSync(page, "utf8");
  for (const needle of needles) {
    if (!html.includes(needle)) fail(page, `expected content missing: ${needle}`);
  }
}

for (const page of pages) {
  const html = readFileSync(page, "utf8");
  const rel = relative(".", page);
  // Structural checks must not see CSS or JS. Inlined <style> blocks contain
  // SVG data-URIs, which otherwise look like unhidden inline SVG elements.
  const markup = html
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");

  // A renamed placeholder comment would otherwise ship to production as-is.
  const leaked = markup.match(/<!--[A-Z][A-Z0-9_]{3,}-->/g);
  if (leaked) fail(rel, `leaked placeholder comment(s): ${[...new Set(leaked)].join(", ")}`);

  // Exactly one h1 per page.
  const h1s = (markup.match(/<h1[\s>]/g) || []).length;
  if (h1s !== 1) fail(rel, `expected exactly 1 <h1>, found ${h1s}`);

  // Heading levels must not skip (h2 -> h4), and the outline must open at h1.
  const levels = [...markup.matchAll(/<h([1-6])[\s>]/g)].map((m) => Number(m[1]));
  if (levels.length && levels[0] !== 1) {
    fail(rel, `first heading on the page is h${levels[0]}, expected h1`);
  }
  let prev = 1;
  for (const level of levels) {
    if (level > prev + 1) {
      fail(rel, `heading level skips from h${prev} to h${level}`);
      break;
    }
    prev = level;
  }

  // Content placeholders that must never reach production.
  for (const marker of ["[BUYOUT AMOUNT]", "TODO(owner)", "lorem ipsum"]) {
    if (html.includes(marker)) fail(rel, `unresolved placeholder: ${marker}`);
  }

  // Control characters, which a bad scripted edit can introduce invisibly.
  if (/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/.test(html)) {
    fail(rel, "contains control characters");
  }

  // Every page needs a title, a description and a canonical (except 404).
  if (!/<title>[^<]{10,}<\/title>/.test(html)) fail(rel, "missing or too-short <title>");
  if (!/<meta name="description" content="[^"]{50,}"/.test(html)) {
    fail(rel, "missing or too-short meta description");
  }
  if (!rel.includes("404") && !/<link rel="canonical"/.test(html)) {
    fail(rel, "missing canonical link");
  }

  // Titles over ~60 chars get truncated in search results.
  const title = html.match(/<title>([^<]*)<\/title>/);
  if (title && title[1].length > 62) {
    warnings.push(`${rel}: <title> is ${title[1].length} chars, likely truncated in search results`);
  }


  // Nested anchors are invalid and the parser silently shreds the surrounding
  // markup. This shipped live once, on the contact page's first card.
  let depth = 0;
  let nested = false;
  for (const m of markup.matchAll(/<a\b[^>]*>|<\/a>/g)) {
    if (m[0] === "</a>") depth = Math.max(0, depth - 1);
    else if (++depth > 1) { nested = true; break; }
  }
  if (nested) fail(rel, "nested <a> elements");

  // Decorative inline SVGs must stay hidden from screen readers. 400+ of these
  // are hand-pasted, so a copy-paste regresses it silently.
  const svgs = [...markup.matchAll(/<svg\b[^>]*>/g)].map((m) => m[0]);
  const unhidden = svgs.filter(
    (tag) => !/aria-hidden|aria-label|role=/.test(tag),
  ).length;
  if (unhidden > 0) {
    fail(rel, `${unhidden} inline <svg> element(s) without aria-hidden, aria-label or role`);
  }

  // The old unoptimized image path must stay dead.
  if (html.includes("/images/home-offer-portrait")) {
    fail(rel, "references the deleted unoptimized portrait");
  }
}

// The contact form is the only lead path on the site. Guard it specifically.
const contact = existsSync("dist/contact.html")
  ? readFileSync("dist/contact.html", "utf8")
  : "";
if (contact) {
  if (!/name="form-name"\s+value="contact"/.test(contact)) {
    fail("dist/contact.html", "Netlify form-name hidden input missing or mismatched");
  }
  if (!/<form[^>]*\bname="contact"/.test(contact)) {
    fail("dist/contact.html", "form name attribute missing");
  }
  if (contact.includes("recaptcha")) {
    fail(
      "dist/contact.html",
      "reCAPTCHA is back. The netlify.toml CSP must whitelist google.com/gstatic.com or submissions will be silently rejected.",
    );
  }
}

// The privacy policy states that Google Analytics is in use. If the build ships
// no analytics (PUBLIC_GA_ID unset), the policy describes something that is not
// happening. Accurate again the moment the env var is set in Netlify.
const privacy = existsSync("dist/privacy.html")
  ? readFileSync("dist/privacy.html", "utf8")
  : "";
if (privacy.includes("Google Analytics")) {
  const anyGa = pages.some((p) => readFileSync(p, "utf8").includes("googletagmanager.com/gtag/js"));
  if (!anyGa) {
    warnings.push(
      "privacy.html says Google Analytics is in use, but no page loads it. Set PUBLIC_GA_ID in Netlify, or amend the policy.",
    );
  }
}

for (const w of warnings) console.warn(`  warn  ${w}`);

if (errors.length) {
  console.error(`\nverify-build: ${errors.length} problem(s) found\n`);
  for (const e of errors) console.error(`  FAIL  ${e}`);
  console.error("");
  process.exit(1);
}

console.log(
  `verify-build: ${pages.length} pages OK${warnings.length ? `, ${warnings.length} warning(s)` : ""}`,
);
