/**
 * The two services, defined once and rendered by PricingPlans.astro on the
 * home page (summary) and /pricing (full).
 *
 * Keep the three-way split: what the price buys (included), genuinely optional
 * extras (addOns, never shown with a checkmark), and what is not part of it
 * (notIncluded), so nothing reads as a hidden fee at the quote stage.
 */
export interface Plan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  /** Rendered small, next to the price. */
  priceUnit: string;
  /** Rendered under the price block. */
  priceNote: string;
  /** What the price actually buys. */
  included: string[];
  /** Genuinely optional, genuinely extra cost. Never shown with a checkmark. */
  addOns: string[];
  /** Explicitly not part of this plan. */
  notIncluded: string[];
  badge?: string;
  featured?: boolean;
}

export const plans: Plan[] = [
  {
    id: "website",
    name: "Website Redesign",
    tagline: "Priced per designed page. A 5 page site is $375.",
    price: "$75",
    priceUnit: "per page",
    priceNote: "50% to start, 50% at launch. Full refund if you are not satisfied with the design.",
    included: [
      "A custom design for every page",
      "Unlimited design revisions until you approve",
      "A custom editor so you can change text and photos yourself",
      "One month of unlimited support after launch",
      "Fast static build with no plugins to keep updated",
      "Set up in a hosting account you own",
    ],
    addOns: [],
    notIncluded: [
      "Hosting fees, paid to the host directly (most small business sites fit a free plan)",
      "Domain registration",
    ],
  },
  {
    id: "seo",
    name: "Local SEO",
    tagline: "Four month minimum. Full refund if the agreed targets are not met.",
    price: "$799",
    priceUnit: "per month",
    priceNote: "For the first 4 months. After that, $399 per month for maintenance if you choose to continue.",
    included: [
      "Targets agreed in writing before work starts",
      "Google Business Profile optimization",
      "On-page SEO and service area pages",
      "Local citations and link building",
      "A monthly report measured against the targets",
    ],
    addOns: [],
    notIncluded: [],
  },
];
