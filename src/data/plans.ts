/**
 * The two pricing plans, defined once.
 *
 * These used to be hand-maintained in two places (the home page block and
 * /pricing) and had already drifted: the home card showed "$1,200 one-time" with
 * no hosting cost attached while /pricing showed "+$25/mo Hosting", which is the
 * pattern that reads as a hidden fee at the quote stage.
 *
 * Note the three-way split. Costs like hosting and per-page fees used to be
 * rendered as bullet points with the same green checkmark as genuine inclusions,
 * directly under the words "Everything included".
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
    id: "lump-sum",
    name: "Lump Sum",
    tagline: "Pay once and own the site files outright.",
    price: "$1,200",
    priceUnit: "one time",
    priceNote: "Plus $25 per month for hosting, so about $1,500 in your first year.",
    included: [
      "Design and development",
      "You own the site files once the one time fee is paid",
      "Up to 5 pages",
    ],
    addOns: [
      "Hosting, $25 per month",
      "Extra pages beyond 5, $100 each",
      "Unlimited edits, $60 per month",
      "Add a blog, $250 one time",
    ],
    notIncluded: [
      "Direct owner access, 7 days a week",
      "Updates included while your plan is active",
    ],
  },
  {
    id: "monthly",
    name: "Monthly",
    tagline: "Nothing up front. Cancel any time after the first six months.",
    price: "$150",
    priceUnit: "per month",
    priceNote: "$0 down, 6 month minimum.",
    included: [
      "Design and development",
      "Hosting",
      "Up to 5 pages",
      "Unlimited edits",
      "Direct owner access, 7 days a week",
      "Updates included while your plan is active",
    ],
    addOns: ["Extra pages beyond 5, $100 each", "Add a blog, $250 one time"],
    notIncluded: [],
    badge: "Most Popular",
    featured: true,
  },
];
