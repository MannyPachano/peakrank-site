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
the site ships no analytics at all, so there is no measurement ID to set in Netlify.

Also worth doing once: verify the domain in Google Search Console and resubmit
`https://peakrankingseo.com/sitemap-index.xml`, since every canonical URL changed
from a redirecting form to a 200.
