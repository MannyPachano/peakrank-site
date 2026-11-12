# docs

`htaccess.reference` is the Apache header config from before this site moved to Netlify.
**It is not read by anything.** Netlify serves the site, and the live security headers and
CSP are in `netlify.toml` at the repo root.

It is kept only as a reference for a future Apache host. If you are debugging a blocked
script, read `netlify.toml`, not this file. Its CSP whitelists Google, reCAPTCHA, Google
Fonts and Unsplash, none of which reflect what the site actually loads today.

## Before deploying

Nothing outstanding. The three owner-supplied items that used to live here are settled:
the ZIP is set in `src/data/business.ts`, there is no Google Business Profile to link, and
analytics is live through Google Tag Manager.

## Analytics

Container **GTM-5KDHW2TC**, hard-coded in `src/layouts/PeakLayout.astro`, not an env var,
so it ships identically from any machine. It loads GA4 **G-TT848DD5CV** and a
`generate_lead` event on `/thanks`. Both the tag and the event are configured inside the
container, so adding or changing a tag is a GTM publish, not a deploy.

What a code change does have to keep in step: the `googletagmanager.com` and
`google-analytics.com` hosts in the `netlify.toml` CSP (an untagged host is blocked
silently, exactly like the old reCAPTCHA breakage), the Cookies section and the service
provider list on `/privacy`, and the `verify-build.mjs` check that every built page
carries the container ID.

Also worth doing once: verify the domain in Google Search Console and resubmit
`https://peakrankingseo.com/sitemap-index.xml`, since every canonical URL changed
from a redirecting form to a 200.
