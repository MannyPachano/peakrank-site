/**
 * Single source of truth for business facts and marketing claims.
 *
 * Anything stated in more than one place on the site belongs here. Before this
 * file existed the site published five different PageSpeed numbers, two
 * different service areas and two different hours, because each was typed by
 * hand into six or seven partials.
 *
 * Fields left empty are omitted from the schema rather than emitted blank, and
 * verify-build fails the build if a TODO(owner) placeholder reaches dist/.
 */

export const business = {
  name: "PeakRanking Digital Solutions",
  shortName: "PeakRanking",
  email: "hello@peakrankingseo.com",

  /** E.164, used for schema and for the tel: fallback. */
  phoneE164: "+16787932445",
  /**
   * Texting is the preferred first contact, so every tappable number on the site
   * opens a message rather than dialling. tel: is kept only where calling is
   * explicitly offered as the alternative.
   */
  smsHref: "sms:+16787932445",
  /** Human-readable, used everywhere it is displayed. */
  phoneDisplay: "(678) 793-2445",

  address: {
    locality: "Marietta",
    region: "GA",
    country: "US",
    /**
     * Street address is deliberately omitted because this is a service-area
     * business that does not see customers at a location; Google asks those
     * businesses to hide the street address rather than publish one.
     */
    postalCode: "30062",
  },

  /** Marietta, GA city centre. Approximate on purpose, see the note above. */
  geo: { latitude: 33.9526, longitude: -84.5499 },

  /**
   * Mirrors the line published on /contact and in the footer.
   *
   * There are no posted opening hours any more. The old "7 days a week, 8am to
   * 8pm ET" was a promise about availability that is not kept literally, and
   * schema.org openingHoursSpecification was dropped with it rather than
   * publishing hours to Google that the business does not actually keep.
   *
   * No call offer here or anywhere else in the marketing copy. Manny works by
   * text and email; the only tel: links left are the contact of record on the
   * privacy and terms pages.
   */
  hours: {
    display: "Text or email any day",
    subtext: "I reply within one business day",
  },

  /**
   * schema.org sameAs. Every entry must be a real, live profile. There is no
   * Google Business Profile for PeakRanking, so none is listed here.
   */
  profiles: ["https://www.linkedin.com/in/manny-pachano/"],

  serviceAreaDisplay: "Serving small businesses nationwide from Marietta, GA",
} as const;

/**
 * Marketing claims that appear in more than one place.
 *
 * These are advertising claims about measurable things, and every one of them is
 * falsifiable in about thirty seconds by a prospect running the tool your own copy
 * tells them to run. Keep them true. If you can evidence a stronger number across
 * your client sites, change it here once and it updates everywhere.
 */
export const claims = {
  /**
   * Set conservatively because the site previously claimed "100", "98 to 100",
   * "95 to 100", "100/100" and "perfect scores" in eight different places, and
   * "perfect" additionally promises 100 on Accessibility and Best Practices,
   * which this site does not currently hit.
   */
  pageSpeed: "90+ PageSpeed scores on mobile and desktop",
  pageSpeedShort: "90+ PageSpeed scores",

  /** Typical build time, stated on /about and in the /pricing FAQ. */
  buildTime: "1 to 3 weeks",
} as const;

/** Rendered in the footer so it is never a year stale. */
export const copyrightYear = new Date().getFullYear();
