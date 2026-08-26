# PeakRanking Digital Solutions: site audit and improvement plan

Everything below was verified against the working tree at `/Users/manuelpachano/Documents/Manny SEO` on 2026-08-26. Line numbers are current as of the in-progress testimonials edit (`src/data/testimonials.ts`, `src/components/Testimonials.astro`). Items marked CREDIBILITY RISK are places where the site contradicts the exact expertise it sells.

## Fix now

**1. The contact form cannot be submitted. The live CSP blocks the reCAPTCHA that Netlify injects.**
`netlify.toml:33` plus `src/partials/contact-main.html:91` and `:140`
Why: `script-src 'self' 'unsafe-inline'` has no `google.com` and there is no `frame-src`, so the widget never renders, the POST carries no `g-recaptcha-response`, and Netlify rejects the submission. This is the only lead form on the site and it fails with no error in the Netlify UI and no trace in the repo, so zero leads reads as zero interest.
Fix: either delete `data-netlify-recaptcha="true"` from both lines and rely on the honeypot already wired at `:90`, or add `https://www.google.com https://www.gstatic.com` to `script-src` and add `frame-src 'self' https://www.google.com`. Then submit one real test lead and confirm it lands in Netlify Forms.

**2. The offer copy and the pricing table contradict each other on the same scroll.**
`src/components/HomeOfferSection.astro:24,26` against `src/partials/home-main.html:181,182,190`; same at `src/partials/pricing-main.html:47,51,66`
Why: "Every plan includes design, development, hosting, unlimited edits, 24/7 support, and lifetime updates" sits above a table that X's out 24/7 Support and Lifetime Updates on the Lump Sum plan, and "Zero down. Everything included." sits directly above "$100 fee per page after 5" and "+$250 to add a Blog" rendered with the same green checkmark as genuine inclusions. CREDIBILITY RISK: a buyer reads this as either careless or as a setup for a surprise invoice, at the exact moment they decide.
Fix: scope the inclusive claim to the $150/mo plan, drop "Everything included" from both plan descriptions, split each card into an Included list and a visually distinct Add-ons list, and state the Lump Sum first-year total ($1,200 plus $25/mo hosting plus $60/mo edits equals $2,220).

**3. Every "Call Us Today" button opens a form, and no page above the footer has a tappable number.**
`src/components/HomeOwnerCallout.astro:8`, `src/partials/about-main.html:33-34`, `src/components/HomeOfferSection.astro:81`; `src/components/PeakHeader.astro` contains no `tel:` at all
Why: phone access is the stated differentiator ("no phone trees, no chatbots, you get the owner and developer directly", `HomeOfferSection.astro:67`), mobile is where local service traffic lands, and tap-to-call is normally the highest-converting element on a site like this. "Schedule a Call" also points at `/contact`; no booking URL exists anywhere in the repo.
Fix: add `<a href="tel:+16787932445">(678) 793-2445</a>` to the header nav as a visible mobile target, change the two "Call Us Today" hrefs to `tel:`, and either wire a real booking link to "Schedule a Call" or relabel it to match where it goes.

**4. No page title or H1 on the site carries a city except /about.**
`src/pages/index.astro:24`, `src/partials/home-main.html:6`, `src/pages/web-design.astro:8`, `src/pages/local-seo.astro:8`
Why: "Small Business Web Designer" is a national head term this site will not win, while "web designer marietta ga" and "small business seo marietta" are winnable and are where the calls come from. The homepage title is 84 characters, so "$0 Down $150 Per Month", the most compelling thing in it, is truncated out of the SERP.
Fix: rewrite to something like "Small Business Web Design in Marietta, GA | $0 Down, $150/mo" (under 60 chars), change the H1 to "Small Business Web Designer in Marietta, GA", and add "Marietta and Metro Atlanta" to both service page titles.

**5. Every canonical tag and 10 of the 11 sitemap URLs point at a URL that 301 redirects.**
`astro.config.mjs:7` (`trailingSlash: "never"` with Astro's default directory build format)
Why: Netlify serves `/about/` while the page declares `<link rel="canonical" href="https://peakrankingseo.com/about">` and the sitemap submits the same slashless URL. Search Console reports those as "Page with redirect" and drops them from the submitted set. CREDIBILITY RISK: this is the first thing a prospect who knows SEO would check on an SEO agency's own site.
Fix: add `format: "file"` inside the existing `build` block so Astro emits `dist/about.html`, rebuild, re-curl `/about` and `/contact` for a 200, then resubmit the sitemap.

**6. og:image is an SVG, so every shared link renders a blank card.**
`src/layouts/PeakLayout.astro:52` (`ogImage = "/og-image.svg"`), consumed at `:140`, `:158` and `:115`
Why: Facebook, LinkedIn, X, Slack and iMessage do not rasterize `image/svg+xml`, so every link Manny or a client pastes anywhere shows as a bare text link, made worse by `twitter:card = summary_large_image`. It also puts the BlogPosting `image` at risk of rejection. CREDIBILITY RISK: a broken share card is a live demo of the problem you are selling against.
Fix: rasterize `public/og-image.svg` (it already declares 1200x630) to `public/og-image.png`, point `:52` at it, add `og:image:width`, `og:image:height`, `og:image:type` and `og:image:alt`, update the cache header at `netlify.toml:50-53`, then re-scrape with the Facebook Sharing Debugger and LinkedIn Post Inspector.

**7. There is no analytics, no conversion tracking, and no verification token anywhere in the repo.**
`src/layouts/PeakLayout.astro` head, `public/js/` (only `peak-nav.js`), `public/.well-known/` (empty)
Why: nothing here tells you which page or post produces a form submission, so every fix in this report is unmeasurable and the reCAPTCHA failure above could have been running for months unseen. CREDIBILITY RISK: `src/partials/about-main.html:67` sells clients "Hosting, analytics, Search Console, the works."
Fix: add GA4 or Plausible in the layout head, add the host to `script-src` and `connect-src` at `netlify.toml:33` in the same commit (an untagged host is blocked exactly like reCAPTCHA is), fire the conversion on `/thanks`, add `tel:` and `mailto:` click tracking, and verify the domain in Search Console.

## High value

**8. Five CTAs promise a free audit and land on a page that never mentions one.**
`src/partials/blog-slow-website-main.html:103`, `blog-local-seo-2026-main.html:122`, `blog-no-wordpress-wix-main.html:142`, `blog-index-main.html:128`, `local-seo-main.html:93`, all pointing at `/contact`
Why: this is the highest-intent traffic on the site, someone who read 1,500 words and clicked a specific offer, and they arrive at a generic "Send Us A Message" box whose service select at `contact-main.html:125-130` has no audit option. You also cannot tell an audit request from a general enquiry when one arrives.
Fix: add `<option value="free-audit">Free site / SEO audit</option>` as the first real option, name the audit in the contact H1 and subhead, support `/contact?service=free-audit`, and collapse the four different CTA labels to one wording.

**9. Both service pages have one CTA, at the very bottom, and neither shows a price.**
`src/partials/web-design-main.html:78-81` and `src/partials/local-seo-main.html:90-93`
Why: these are the pages the header dropdown points at and the pages that rank for commercial keywords, yet a reader convinced at paragraph four has nothing to act on: no price, no number, no form, no inline CTA. Neither page contains "$150", "$1,200" or the phone number.
Fix: add a CTA to both page headers (copy the pattern at `pricing-main.html:6`), drop one inline CTA mid-page like the blog posts do at `blog-slow-website-main.html:101-108`, and put "$0 down, $150/mo" on both pages.

**10. The contact form's input boxes are effectively invisible.**
`src/styles/peak-contact.css:214-218` and `:228-229`
Why: the field interior composites to 1.18:1 against the card and the `var(--line)` border to 1.25:1, against a WCAG 1.4.11 requirement of 3:1, and the placeholders sit at 3.22:1. Nothing marks where the Name, Email or Message box begins until you click into it, on the only lead form on the site, for a buyer persona that skews 45 and older.
Fix: set the resting border to `#46566e` (about 3.2:1), remove `opacity: 0.6` from the placeholder rule and set `color: #8b9ab0`, and thicken the existing focus border to 2px.

**11. The form requires a written message but makes the phone number optional.**
`src/partials/contact-main.html:136` (textarea `required`) versus `:118` (tel input, no `required`)
Why: a free-text box with a 100-character prompt is the highest-abandonment field on a B2B form and it is mandatory, while the channel this business promises to answer is optional, so a share of leads arrive with no way to call them back.
Fix: drop `required` from the textarea and add it to the phone input, or require email-or-phone. The service select already captures enough intent to route the enquiry.

**12. The Services dropdown is hover-only, so /local-seo is unreachable from the nav by keyboard.**
`src/styles/peak-shared.css:168` (`visibility: hidden`) revealed only by `:189` (`.has-dropdown:hover`)
Why: `visibility: hidden` removes both submenu links from the tab order and the accessibility tree, and `public/js/peak-nav.js` has no dropdown code. Desktop tab order goes Services then Pricing. The parent link happens to point at `/web-design`, so Local SEO, half the revenue offer, is reachable only from the footer.
Fix: add `.has-dropdown:focus-within .dropdown { opacity: 1; visibility: visible; transform: translateX(-50%) translateY(0); }` beside the hover rule, and mirror it for `.dropdown-arrow` at `:164`.

**13. /pricing is orphaned and cannibalized by a duplicate pricing block on the homepage.**
`src/partials/home-main.html:165` duplicates the `/pricing` H1 verbatim (`pricing-main.html:5`); `src/components/PeakFooter.astro:28-32` omits both Pricing and Contact
Why: two URLs with the same H1 and the same price table means Google picks the homepage, because `src/components/PeakHeader.astro:81` is the only internal link `/pricing` gets site-wide. That leaves a bottom-of-funnel money page with almost no internal PageRank, and the footer that ends every long page cannot reach it either.
Fix: trim the homepage block to a two-line summary plus a "See full pricing" link, point the two plan buttons at `/pricing`, add Pricing and Contact to the footer Quick Links, and give `/pricing` a distinct H1 such as "Small Business Website Pricing: $0 Down or $1,200 One-Time".

**14. Nothing on the site links to a Google Business Profile, and the LocalBusiness schema has no sameAs.**
`src/layouts/PeakLayout.astro:75-90`
Why: the node has no `streetAddress`, no `postalCode`, no `geo`, no hours, no `image`, and a 40x40 SVG in `logo` that fails Google's Organization logo rules twice. There is no entity connection between this website and any profile or directory. CREDIBILITY RISK: building that connection is literally the $150/month service, and `blog-local-seo-2026-main.html:114` tells readers to do it.
Fix: add street address, postal code, `geo`, `openingHoursSpecification`, a `description`, an `image` pointing at the new raster OG file, a 112px-plus PNG logo, and a `sameAs` array with the GBP and LinkedIn URLs. Link the GBP from the footer contact block.

**15. The site states five different PageSpeed numbers, two of them inside the same card.**
`src/components/HomeOfferSection.astro:50` ("100 PageSpeed Scores") against `:51` ("98 to 100"); also `home-main.html:97,133,139-152`, `local-seo-main.html:72`, `web-design-main.html:15`, `blog-slow-website-main.html:98`, `blog-no-wordpress-wix-main.html:47`, `src/pages/index.astro:25` ("perfect PageSpeed scores")
Why: "100", "98 to 100", "100/100", "95 to 100" and "perfect" cannot all be the number, and every one is falsifiable in thirty seconds with the tool your own copy tells readers to run. CREDIBILITY RISK: "perfect scores" also promises 100 on Accessibility and Best Practices, which this site would not hit today.
Fix: pick one defensible line, for example "90+ on Google PageSpeed, mobile and desktop", and use it verbatim in all eight places. Label or delete the four unattributed "100" rings at `home-main.html:139-152`.

**16. The flagship blog post's headline dollar figure is wrong by a factor of twelve.**
`src/partials/blog-slow-website-main.html:40`
Why: 500 lost visitors a month at $800 each is $400,000 per month, not per year, and the premise treats every bounced visitor as a lead, which no roofer believes. CREDIBILITY RISK: this is the most quotable number in your main organic entry point, on a page that closes by asking the reader to trust your audit.
Fix: rebuild the example with a conversion rate: 1,000 visitors, a 3% lead rate, 500 bouncing, about 15 lost leads a month, roughly $12,000 a month at $800 profit. The smaller number is more persuasive because the reader can check it.

**17. "Literally nothing for a hacker to break into" is stated as an absolute in four places.**
`src/components/HomeOfferSection.astro:35`, `src/partials/web-design-main.html:15,21,33`, `blog-no-wordpress-wix-main.html:87-88`
Why: the registrar, DNS, the Netlify account, the git repo and the build pipeline are all takeover paths, and your own `privacy-main.html:63` says "we cannot guarantee absolute security". CREDIBILITY RISK plus contract exposure: if a client site is ever defaced, "100% Secure" is the quoted exhibit, and the as-is disclaimer in the Terms does not cover an express affirmative claim.
Fix: use the true and still strong version. No database, no admin login, no plugins, so the entire class of CMS and plugin exploits does not apply, and domain and hosting accounts are locked with 2FA. Change the table row from "Hackable: No" to "Plugin/CMS exploits: None".

**18. The WordPress post states something false about two named competitors.**
`src/partials/blog-no-wordpress-wix-main.html:59` ("The platform owns your content, your design, your everything") and the table rows at `:87-92`
Why: both Wix and Squarespace state that users retain ownership of their own content, and Squarespace provides content export. That is a false statement of fact about identified competitors in commercial advertising, which is the core of a Lanham Act 43(a) claim, and both companies have counsel who send letters over exactly this.
Fix: rewrite to the accurate and nearly as persuasive version. You own your text and images and can export them, but the site itself, the design and templates, stays on the platform, so leaving means rebuilding. Change the "You Own The Files" cell to "Content only".

**19. Three pages tell prospects the PageSpeed score is a Google ranking factor and put words in Google's mouth.**
`src/partials/web-design-main.html:36`, `blog-no-wordpress-wix-main.html:47`, `blog-local-seo-2026-main.html:106`
Why: Google has repeatedly said the Lighthouse score is not used in ranking, field Core Web Vitals are the page-experience input, and that system has been de-emphasized, not strengthened. CREDIBILITY RISK: being wrong about what Google published, on the page selling SEO, is precisely what a prospect vetting vendors checks.
Fix: drop "Google has come right out and said", talk about Core Web Vitals field data as one input, lead with the defensible mechanism (faster pages keep more visitors), and delete "more than they were before".

**20. The local SEO stat block and the results claims have no sources and no client data behind them.**
`src/partials/local-seo-main.html:20-23` and `:82`; `blog-slow-website-main.html:54,98`; `blog-local-seo-2026-main.html:65`
Why: the 76% and 28% figures are Google/Ipsos 2016, the 46% traces to a 2018 third-party blog, and "5x your call volume" has no traceable source at all, on a page whose premise is that you are current. "Most clients are ranking in the top 3" and "our client sites consistently score 95 to 100" are typicality claims that require substantiation, and the site shows no verifiable client. CREDIBILITY RISK on both counts.
Fix: cite each surviving stat inline with source and year, delete "5x your call volume", and rewrite the outcome claims as process statements ("most local markets take 6 to 12 months to break into the top 3, and here is the monthly report you will get") unless you can produce anonymized ranking data on request.

**21. The money-back guarantee and site ownership are asserted on the marketing pages and absent from the Terms.**
`src/components/HomeOfferSection.astro:58-59`; `src/partials/pricing-main.html:22,95`; `src/partials/terms-main.html` has zero matches for "refund"
Why: nothing defines the refund trigger, window, or whether monthly payments already made are returned, while Terms 13 disclaims all warranties and Terms 18 is an entire-agreement clause, which is the deceptive-guarantee fact pattern the FTC and Georgia's Fair Business Practices Act target. Ownership is answered three different ways: `blog-no-wordpress-wix-main.html:61` promises no lock-in ever, the Lump Sum card says "own the site forever", and `terms-main.html:66` conditions ownership on being "fully paid", which a $150/mo subscriber never is.
Fix: add a Guarantee and refunds section to the Terms with a concrete window, add a rent-versus-own rule for the monthly plan (handover or buyout price on cancellation), replace "Lifetime Updates" with "Updates included while your plan is active", and link the homepage guarantee card to `/terms#guarantee`.

**22. Three pages ship a 107 KB PNG for a photo displayed at 140px, while the homepage ships a 10 KB WebP of the same file.**
`src/partials/web-design-main.html:46`, `src/partials/local-seo-main.html:46`, `src/pages/about.astro:10`
Why: `public/images/home-offer-portrait.png` is a byte-identical duplicate of `src/assets/home-offer-portrait.png` (both 107,046 bytes), it bypasses the Astro pipeline, and `/images/*` is the one asset path with no Cache-Control rule in `netlify.toml`, so it revalidates on every view. CREDIBILITY RISK: `/web-design` tells the reader to run PageSpeed while shipping the site's largest asset unoptimized.
Fix: extract an `OwnerPhoto.astro` component using `<Image>` from `astro:assets`, render it on all three pages through the placeholder-marker pattern the home page already uses, and delete `public/images/home-offer-portrait.png`.

**23. The archived portfolio contains fabricated clients, and the restored testimonials are unverifiable.**
`src/partials/_archived/home-portfolio-section.html:24-26` and `src/data/testimonials.ts`
Why: the archived cards name "Summit Roofing Co." with "4x the leads within three months" and a "Visit Website" label wrapped in `<a href="/contact">`, so the click that promises a live site delivers a form. None of the nine testimonials sets the `person` field the interface defines, none links to a company or a public review, and several names follow the same invented pattern as the portfolio ones. With no case studies and no Google reviews, testimonials carry the entire trust load.
Fix: do not restore that file as written. Ship only the entries you can name a real contact for, add `person` and a company link to each, and ask Universal Environmental Services, Hawkeye Technology and Nuvector for a public Google review. One verifiable review beats nine anonymous quotes.

**24. Markup placed between the OFFER_SECTION and TESTIMONIALS markers is silently deleted at build time.**
`src/pages/index.astro:19-20` (`const [, afterOffer] = splitAt(...)` discards element 0)
Why: `src/partials/_archived/home-portfolio-section.html:1` instructs a future editor to restore the portfolio "right after the OFFER_SECTION placeholder comment", which is exactly the region that gets thrown away. The build exits 0, the output is byte-identical, and nothing warns.
Fix: keep and render every slice with its own `set:html`, or make `splitAt` throw when the discarded segment contains anything but whitespace and comments. Correct the stale instruction in the archived file at the same time.

## Worth doing

**25. "24/7" is published as your hours and sold as a paid line item by a one-person shop.**
`src/partials/contact-main.html:70` and `:7`, `src/components/PeakFooter.astro:41`, `pricing-main.html:91`, `home-main.html:198`
Why: the sub-line under the claim already concedes "or call back same day", so the copy contradicts itself, and because 24/7 Support is a checkmarked item on a paid plan it is a contracted deliverable, not puffery. It also invites 11pm calls that hit voicemail, turning your strongest real differentiator into a broken promise.
Fix: change the hours to "7 days a week, 8am to 8pm ET", rename the line item to "Direct owner access, 7 days a week" in both pricing tables, and change "we'll pick up" to "we answer or call back the same day".

**26. "Our in-house design team" and "no offshore queue" describe a two-person team whose SEO specialist links to /in/seo-manila/.**
`src/components/HomeOfferSection.astro:43` and `:67` against `src/partials/about-main.html:79,88-90,111`
Why: a prospect who reads About after the homepage counts two people, finds no design team, and sees the offshore promise sitting one click from a Manila LinkedIn URL. The one-person-shop framing is the actual advantage and only lands if the rest of the copy is not bigger than the reality.
Fix: change `:43` to "Every design is drawn from scratch by the person building your site", describe the two-person arrangement plainly on About, drop "no offshore queue" while keeping "no phone trees, no chatbots, you get the owner directly", and pick one voice (I for the founder story, we for the operation).

**27. Screen readers announce the excluded pricing rows as if they were included.**
`src/partials/pricing-main.html:38-45`, `src/partials/home-main.html:181-182`, styled at `src/styles/peak-pricing-page.css:80`
Why: the only difference between an included and an excluded perk is an unlabelled SVG path plus CSS `line-through`, neither of which is announced, so the $1,200 card reads out as including 24/7 Support and Lifetime Updates. That is a misrepresentation of a paid offer, and `opacity: 0.5` also drops the text to 2.58:1 for sighted users.
Fix: add `aria-hidden="true"` to every plan-perk SVG and a `<span class="sr-only">Not included: </span>` / `Included: ` prefix (the class is already global at `peak-shared.css:35`), drop the opacity and use a solid `#8fa0b8`.

**28. The privacy policy does not describe what the site actually does.**
`src/partials/privacy-main.html:37`
Why: it claims cookies "for basic analytics" that do not exist, and greps for "netlify", "recaptcha" and "google" across both legal pages return nothing, so the two processors that touch every lead's name, email and phone are unnamed. Google's reCAPTCHA terms require disclosure and links to Google's policy and terms. CREDIBILITY RISK: this policy is a work sample for clients who will ask whether you handle privacy properly.
Fix: add a Service providers section naming Netlify (hosting and form processing) and Google reCAPTCHA if you keep it, with the standard notice text under the submit button, rewrite `:37` to say what is true today, and add a short California residents section.

**29. Both service pages skip from H1 to H3 and put their strongest sections at H4.**
`src/partials/local-seo-main.html:18,28,33,38,58,71` and `src/partials/web-design-main.html:17,27,30,35,40,65`
Why: the sections carrying the commercial keywords ("Google Business Profile Is The Foundation", "Improve Your Search Ranking") sit at the weakest heading tier under an H3 with no parent H2, on the two pages the business needs to rank. CREDIBILITY RISK: `local-seo-main.html:39,41` sells fixing "proper heading structure" for clients. Every other page in the repo is clean.
Fix: promote the top-level sections to H2 and the sub-points to H3 on both pages.

**30. /pricing has no headings for either plan.**
`src/partials/pricing-main.html:21` and `:65` (`<div class="plan-name">`), mirrored at `home-main.html:172,189`
Why: the whole page contains two headings, the H1 and the closing CTA, so a screen-reader user cannot jump between the $1,200 and $150 cards, and Google gets no H2 containing "Lump Sum", "Monthly", "$1,200" or "$150 per month".
Fix: change the plan names to `<h2 class="plan-name">` on /pricing and `<h3>` on the home block. The existing CSS carries the styling, so nothing changes visually.

**31. There is no skip link, and every page starts with seven or eight identical header tab stops.**
`src/layouts/PeakLayout.astro:187` already has `<main id="main-content">`, and nothing targets it
Why: WCAG 2.4.1, and it hurts most on `/contact`, where the entire point of the visit is the form. The id is already there.
Fix: add `<a href="#main-content" class="skip-link">Skip to main content</a>` as the first child of `<body>`, style it off-screen with an on-focus position, and add `tabindex="-1"` to the `<main>` so focus lands there in Safari.

**32. Every table-of-contents link on /terms scrolls its heading behind the sticky nav.**
`src/styles/peak-shared.css:31` (`scroll-behavior: smooth`) with `nav` sticky at `:71-72` and no `scroll-padding-top` anywhere
Why: `#s5` lands the heading fully hidden behind the 67 to 80px bar, and `terms-main.html:24-42` has 19 of these links. A small-business owner reading the terms right before signing has to fumble back up on every jump.
Fix: add `scroll-padding-top: 90px;` to the `html` rule at `peak-shared.css:30-32`.

**33. The page keeps scrolling behind the open mobile menu.**
`public/js/peak-nav.js:7` toggles only `body.nav-open`; there is no `overflow: hidden` rule anywhere
Why: the overlay is shorter than the viewport, so a scroll gesture chains through to an 11,000px document. The visitor closes the menu somewhere unrelated to where they started. Focus also escapes behind the overlay with nothing on screen showing where it is.
Fix: add `body.nav-open { overflow: hidden; }` next to `peak-shared.css:273`, add `overscroll-behavior: contain` to `.nav-links`, and add an Escape handler in `peak-nav.js` that closes and returns focus to the hamburger.

**34. .htaccess is dead weight that ships a second, contradictory CSP.**
`.htaccess:9`
Why: Netlify never reads it, but it whitelists `google.com`, `gstatic.com` and `recaptcha.net`, so anyone debugging the broken form greps for "recaptcha", finds a yes, and stops looking. It is a booby trap sitting directly in the path of finding 1. Its Google Fonts and Unsplash entries are also stale (fonts are self-hosted via @fontsource).
Fix: port `object-src 'none'` into the CSP at `netlify.toml:33` and add `Cross-Origin-Opener-Policy = "same-origin"` to the headers block, then delete the file or move it to `docs/htaccess.reference`.

**35. You sell location pages and have none.**
`src/partials/local-seo-main.html:39` ("location pages for every city you serve") against 13 pages, none of them a location page
Why: "nationwide" (`local-seo-main.html:55`, `web-design-main.html:55`) is not a query anyone types, while "web designer kennesaw ga" and "website design smyrna ga" are winnable. CREDIBILITY RISK: a prospect who reads that sentence and checks your own site has a reason not to buy.
Fix: ship 4 to 6 metro Atlanta city pages with genuinely distinct copy and their own Service and areaServed schema, linked from the footer and both service pages, and narrow `PeakLayout.astro:87` from Country/US to the GA cities you can actually rank in.

**36. The service-area claim on the contact page contradicts the schema and contains a grammar error.**
`src/partials/contact-main.html:56-57` ("USA & Canada" / "Serving small businesses across the nations")
Why: this sits in a trust card on the page where the visitor decides whether to hand over their phone number, and Canada appears nowhere else on the site while the Terms set Georgia governing law and Cobb County venue.
Fix: set the value to "United States" and the sub-line to "Serving small businesses nationwide from Marietta, GA", matching the two service pages, and escape the ampersand if you keep one.

**37. The same portrait carries three different alt texts, and the homepage one describes an anonymous man.**
`src/components/HomeOfferSection.astro:12` against `HomeOwnerCallout.astro:12`, `src/pages/about.astro:10`, and both service partials at `:47`
Why: both homepage components import the identical file, so a screen-reader user hears the owner's face introduced once as Manny and once as "a smiling man with curly dark hair", and the site's most prominent image throws away the owner-name entity signal. CREDIBILITY RISK: that string reads exactly like stock-library or unedited AI alt text.
Fix: standardize on "Manny Pachano, Owner and Developer at PeakRanking Digital Solutions" in all four places.

**38. Nothing validates a page between edit and production.**
`package.json:6-10` (dev, build, preview only), no tsconfig.json, no `@astrojs/check`
Why: every page is a raw HTML string handed to `set:html`, so a build that drops four homepage sections or the About portrait is indistinguishable from a correct one. That is why findings 24 and the unguarded replace at `about.astro:8` are dangerous rather than cosmetic. `String.replace` returns the source unchanged when the marker is missing, and the guarded `splitAt` helper five lines below is never applied to the photo.
Fix: add `@astrojs/check` and typescript, a strict tsconfig, a `replaceAt` helper that throws on a missing marker, and a `scripts/verify-build.mjs` smoke test over `dist/` (expected sections per page, no leaked `<!--` markers, exactly one h1). Point Netlify's build command at it.

**39. Two of the five webfonts used on every page are never preloaded.**
`src/layouts/PeakLayout.astro:2-4` and `:161-175`
Why: Roboto Slab 700 loads on 13 of 13 pages and Roboto 500 on 11 of 13, both discovered late by CSS, so on a real mobile connection they arrive a full round trip after the inline CSS parses. That hits the homepage `.hero-eyebrow` and the phone number and email on `/contact`, which are above the fold. A late-swapping headline is the tell a prospect notices on a site selling speed.
Fix: add preload imports and `<link rel="preload">` tags for `roboto-latin-500-normal.woff2` and `roboto-slab-latin-700-normal.woff2`, matching the existing three.

**40. Price lives in two hand-maintained copies that have already drifted.**
`src/partials/home-main.html:174` ("$1,200 one-time", no hosting note) against `src/partials/pricing-main.html:56-57` ("$1,200" plus "+$25/mo Hosting")
Why: a visitor reads $1,200 with no hosting cost attached on the home page, then finds +$25/mo on the pricing page, which is the pattern that reads as a hidden fee at the quote stage. The perk wording has drifted too, and the next price change has to be made in two files with nothing checking.
Fix: move both plans into a typed data file like `src/data/testimonials.ts` and render both pages from a shared `PricingPlans.astro` with a variant prop. At minimum, add the hosting note to the home card today.

**41. 2.7 KB of dead portfolio CSS is inlined into every homepage response.**
`src/styles/peak-home.css:634-790` plus the media override at `:1144`; markup is gone per `home-main.html:111`
Why: `inlineStylesheets: "always"` means this cannot be cached separately, so it re-ships on every uncached home page view for selectors that match nothing, on the page displaying four "100" PageSpeed rings. It is also a trap: restoring the portfolio would inherit silently drifted rules.
Fix: delete those lines and the `.final-cta.compact` block at `peak-shared.css:544-556`, or move the portfolio rules into `_archived/` beside the markup.

**42. The copyright year is hardcoded into all 14 pages.**
`src/components/PeakFooter.astro:68`
Why: on January 1 the footer of a web design agency reads a year stale on every page, including pricing and contact, until someone redeploys.
Fix: compute `new Date().getFullYear()` in the frontmatter and make sure a scheduled Netlify build or any content deploy triggers a rebuild.

## Nice to have

**43. Decorative SVGs lack aria-hidden in seven files while the header, footer and blog posts do it correctly.**
`src/partials/home-main.html` (36 of 36), `pricing-main.html` (17 of 17), `HomeOfferSection.astro` (7 of 7), `contact-main.html` (5 of 5), plus about and both service partials
Why: Chrome exposes an unlabelled `<svg>` as `graphics-document`, so VoiceOver announces "image" 36 times on the home page, interrupting the perk lists that do the selling. The convention already exists in this codebase.
Fix: add `aria-hidden="true"` to every decorative SVG in those files, handling the plan-perk icons together with finding 27, and add a build-time grep to prevent regressions.

**44. Four infinite animations ignore prefers-reduced-motion, and two run on mobile.**
`src/styles/peak-home.css:237,252,260`, `src/styles/peak-shared.css:344-346`, `src/styles/peak-404.css:49`
Why: `.hero .stars` is correctly guarded at `peak-home.css:12-16`, so the intent was there, but the float and twinkle animations beside the H1 and CTA were missed, and the service page header animates a 375x292 element with eight radial-gradient layers on every phone.
Fix: add one global `@media (prefers-reduced-motion: reduce)` block in `peak-shared.css` zeroing animation and transition durations and scroll-behavior, and add the `max-width: 960px` disable to the service page and 404 star rules.

**45. Two links both named "LinkedIn" go to different people, and neither has rel=noopener.**
`src/partials/about-main.html:93` and `:111`
Why: a screen-reader user listing links hears "LinkedIn, LinkedIn" on the page whose entire job is proving real named people do the work, and the site's own blog links at `blog-slow-website-main.html:44` already use `rel="noopener noreferrer"`.
Fix: label them "Manny Pachano on LinkedIn (opens in a new tab)" and "Cris Magno, Jr on LinkedIn (opens in a new tab)", add the rel, and hide the two inline SVGs.

**46. The blog comparison table is a grid of bare divs.**
`src/partials/blog-no-wordpress-wix-main.html:67`
Why: no `<table>`, `<th scope>` or table roles, so six three-value rows read linearly with no column association, and a screen-reader user cannot tell whether "Yes" under Hackable belongs to Hand-Coded or WordPress, inverting the argument. This is the persuasion centrepiece of the post. The check and cross glyphs are correctly hidden with redundant text, so that part is already right.
Fix: convert to a real table with `<th scope="col">` and `<th scope="row">`, keep the class names, change `.post-compare-row > div` to `> *` in `peak-blog-post.css`, and move the `aria-label` text into an `sr-only` caption.

**47. The hamburger has no aria-controls, no Escape key, and a 16px-tall target.**
`src/components/PeakHeader.astro:94`, `src/styles/peak-shared.css:258-267`
Why: the box is 26 by 16 CSS px (three 2px bars, two 5px gaps) because of the global padding reset, which is below every practical touch guideline, and `nav-links` at `:25` has no id for the button to point at.
Fix: give the list `id="primary-nav"`, add `aria-controls`, and add `padding: 8px 4px` with a matching negative margin to reach 34 by 32px.

**48. One contain-intrinsic-size value covers five sections whose real mobile heights are three times larger.**
`src/styles/peak-home.css:1216-1223` (`auto 520px` for `.services, .offer, .performance, .home-pricing, .blog-section`)
Why: measured at 375px, `scrollHeight` is 10,013px at load against a true 15,052px, so the scroll thumb re-scales as the visitor scrolls and the `#pricing` and `#blog` anchors resolve against a layout thousands of pixels wrong. CLS is 0, so Core Web Vitals is unaffected; this is interaction quality only.
Fix: give each section its own value near its true height and re-measure at 375px once testimonials settle.

**49. Every image sets `sizes` but Astro emits no srcset, so it does nothing.**
`src/components/HomeOfferSection.astro:15`, `HomeOwnerCallout.astro:15`, `src/pages/about.astro:10`
Why: `<Image>` only generates a srcset when given `widths` or `densities`, so one 640-wide WebP is served identically to a 375px phone and a 2560px display. The markup reads as if responsive images were implemented, which is how it survived review.
Fix: add `widths={[420, 640, 960]}` to the offer image and `densities={[1, 2]}` to the callout, and drop `sizes` anywhere no srcset is generated.

**50. Nine hand-copied final-CTA blocks, and an accessibility fix reached only four of them.**
`src/partials/home-main.html:263` and eight siblings
Why: any change to the site's closing conversion element (button wording, adding the phone number, an A/B test) is a nine-file edit with no way to confirm all nine landed. The decorative mountain SVG carries `aria-hidden` in the four blog copies and not in home, about, pricing or either service page, which is the proof it already fails.
Fix: create `src/components/FinalCta.astro` taking `heading`, `ctaLabel` and optional `id`, and replace each block with a marker rendered from the page shell.

**51. Two stylesheet pairs are the same component copy-pasted under different class prefixes.**
`src/styles/peak-blog-index.css:226` versus `peak-blog-post.css:513`; `peak-pricing-page.css` is 52% identical to `peak-home.css` after stripping the `.page-pricing` prefix; `peak-article.css` shares 39 pairs with `peak-blog-post.css`
Why: with `inlineStylesheets: "always"` the duplication is shipped, not just stored, and a card tweak has to be made twice under two names with nothing flagging the copy you missed. `peak-testimonials.css` is the precedent for fixing it.
Fix: pull the card rules into a shared stylesheet with one class name, the plan rules into `peak-plans.css` used by both pages, and the prose typography into `peak-prose.css`.

**52. Dead directories and superseded archives.**
`scss/` (seven empty directories, one .DS_Store, referenced nowhere), `scripts/` (empty), `src/partials/_archived/home-testimonials-section.html` and `about-testimonials-section.html`
Why: the scss scaffold implies a Sass build that does not exist, so someone will eventually write .scss that never compiles, and the archived testimonial partials now conflict with `Testimonials.astro`, so restoring one would produce a second unstyled section.
Fix: delete the scss tree and both archived testimonial partials, and either delete `scripts/` or put `verify-build.mjs` from finding 38 in it.

**53. Two small content items.**
`src/partials/about-main.html:5` ("A Small Team That Actually Gives A Damn About Your Site") and `blog-local-seo-2026-main.html:86` ("Angi, HomeAdvisor" and "Opentable")
Why: the H1 is the largest text on the page a stranger reads before handing over money, and it reads as authentic to some buyers and unprofessional to others. HomeAdvisor has been folded into Angi and OpenTable is misspelled, in a post whose premise is that it is current.
Fix: consider "A Small Team That Actually Cares What Your Site Does" and keep the stronger phrasing in body copy; drop HomeAdvisor and fix OpenTable.

**54. /images/* is the only asset path with no Cache-Control rule.**
`netlify.toml:36-53` (blocks exist for `/_astro/*`, `/js/*`, `/favicon.svg`, `/og-image.svg`)
Why: the 107 KB portrait is served with `max-age=0, must-revalidate`, costing a round trip on every repeat visit to the two service pages.
Fix: this disappears when finding 22 moves the image under `/_astro/*`. If a public copy must stay, add a `[[headers]] for = "/images/*"` block with a hashed filename and a long max-age.

## Biggest single thing

Fix the CSP at `netlify.toml:33`. It is one line, and until it changes the contact form at `src/partials/contact-main.html:91` is a dead end: Netlify injects a reCAPTCHA the browser refuses to load, the POST goes out without `g-recaptcha-response`, and Netlify throws the submission away. Every visitor who reads a blog post, clicks a CTA, types their name, email and message, and hits Send is lost, with no bounce to notice, no error in the Netlify dashboard, and no analytics to show the gap. Everything else in this report competes for a slice of the funnel; this one closes the funnel entirely. Fix it, submit a real test lead, confirm it appears under Netlify Forms, and only then start working down the list.