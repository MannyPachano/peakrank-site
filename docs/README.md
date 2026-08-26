# docs

`htaccess.reference` is the Apache header config from before this site moved to Netlify.
**It is not read by anything.** Netlify serves the site, and the live security headers and
CSP are in `netlify.toml` at the repo root.

It is kept only as a reference for a future Apache host. If you are debugging a blocked
script, read `netlify.toml`, not this file. Its CSP whitelists Google, reCAPTCHA, Google
Fonts and Unsplash, none of which reflect what the site actually loads today.

## Before deploying

Three values only the owner can supply. The build warns about the first one.

1. **`PUBLIC_GA_ID`** — set in Netlify under Site configuration, Environment variables.
   Until it is set, no analytics ship at all, and `/privacy` describes Google Analytics
   that is not running. `npm run build` prints a warning while this is outstanding.
2. **Google Business Profile URL** — `business.profiles` in `src/data/business.ts`.
   This is the entity connection between the site and the profile, and it is the
   single highest-value item in the schema.
3. **ZIP code** — `business.address.postalCode` in the same file. The street address
   is deliberately omitted (service-area business), the ZIP is not.

Also worth doing once: verify the domain in Google Search Console and resubmit
`https://peakrankingseo.com/sitemap-index.xml`, since every canonical URL changed
from a redirecting form to a 200.
