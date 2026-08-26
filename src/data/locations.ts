/**
 * Metro Atlanta location pages.
 *
 * The site sells "location pages for every city you serve" on /local-seo and had
 * none of its own, which is the first thing a prospect who reads that sentence
 * checks. These target "web designer {city} ga" style queries, which are winnable,
 * rather than the national head terms the home page was chasing.
 *
 * Marietta is deliberately absent: the home page targets it directly, and a second
 * Marietta page would just split the signal between two URLs.
 *
 * Every page needs genuinely distinct copy. Near-duplicate city pages with the name
 * swapped are the classic doorway-page pattern and Google treats them accordingly.
 * The differentiation here comes from the local industry mix and how those customers
 * search, not from invented facts about the town.
 */
export interface Location {
  /** URL slug, becomes /web-design-{slug}. */
  slug: string;
  city: string;
  /** Short label used in nav and breadcrumbs. */
  shortName: string;
  /** Meta description. Under 155 characters. */
  description: string;
  /** Opening paragraph, sets up why this city specifically. */
  intro: string;
  /** Two or three sections of genuinely city-specific argument. */
  sections: { heading: string; body: string[] }[];
  /** The trades and businesses this city actually has a lot of. */
  industries: string[];
  /** Roughly how far it is from the Marietta base, used in the closing copy. */
  proximity: string;
}

export const locations: Location[] = [
  {
    slug: "kennesaw-ga",
    city: "Kennesaw",
    shortName: "Kennesaw",
    description:
      "Web design and local SEO for Kennesaw, GA small businesses. Hand-coded sites from $0 down and $150 per month, built by a developer 10 minutes up the road.",
    intro:
      "Kennesaw is a competitive place to be a small business online. You are up against national franchise locations with corporate marketing budgets, and against the same handful of contractors who have been buying ads here for years. The good news is that most of them are running slow template sites, and that is a gap you can walk straight through.",
    sections: [
      {
        heading: "A College Town Searches Differently",
        body: [
          "Kennesaw State brings tens of thousands of students and staff into the same few square miles, and that changes what people type into Google. Searches skew heavily toward mobile, toward immediacy, and toward price. Somebody looking for a mechanic near campus is not reading a brochure. They are on a phone, comparing three results, and calling whichever one loads first and shows a number.",
          "That is a speed problem before it is a marketing problem. A site that takes four seconds to appear has already lost that person to the result below it. Ours are static files with nothing to boot up, so they show up immediately on a phone on a bad connection, which is where this traffic actually lives.",
        ],
      },
      {
        heading: "Rental Property And Home Services",
        body: [
          "The rental density around campus keeps a steady stream of work moving for property managers, cleaners, HVAC techs, plumbers, and handymen. That work is almost entirely won through the map results, which means your Google Business Profile matters as much as your website does.",
          "We handle both together. The site gives Google something fast and clearly structured to rank, and the profile work puts you in the three results that appear above everything else. Neither one does much on its own.",
        ],
      },
    ],
    industries: [
      "Home services and contractors",
      "Property management",
      "Restaurants and local retail",
      "Auto repair",
      "Professional services",
    ],
    proximity: "about 10 minutes from our home base in Marietta",
  },
  {
    slug: "smyrna-ga",
    city: "Smyrna",
    shortName: "Smyrna",
    description:
      "Web design and local SEO for Smyrna, GA small businesses. Fast hand-coded websites from $0 down and $150 per month, no WordPress and no page builders.",
    intro:
      "Smyrna has changed fast, and the businesses that have kept up online are doing noticeably better than the ones that have not. There is real money moving through this part of Cobb County, and a lot of it goes to whoever turns up first when somebody searches on their phone.",
    sections: [
      {
        heading: "You Are Competing With Newcomers, Not Just Neighbours",
        body: [
          "The development around the Battery and along the Cumberland corridor brought in a wave of businesses that launched with a modern site from day one. If yours has not been touched since 2018, the comparison is not subtle. A prospect who opens both in two tabs makes a judgment about which business is still paying attention before reading a word.",
          "This is the most fixable problem on that list. A clean, fast, well-structured site puts you back on even footing, and it does not require the budget the newcomers spent.",
        ],
      },
      {
        heading: "A Younger Audience Judges The Site Itself",
        body: [
          "Smyrna skews young and professional, and that audience treats a website as evidence. They will check your site before calling, they will notice if it is slow, and they will notice if it looks like a template they have seen on three other businesses this month.",
          "Every design we do is drawn from scratch for the business it belongs to. That is not an aesthetic preference. It is the difference between looking like a business somebody chose deliberately and looking like one that picked the cheapest option available.",
        ],
      },
    ],
    industries: [
      "Restaurants and bars",
      "Fitness and wellness",
      "Home services and contractors",
      "Real estate",
      "Salons and personal care",
    ],
    proximity: "about 15 minutes south of our home base in Marietta",
  },
  {
    slug: "roswell-ga",
    city: "Roswell",
    shortName: "Roswell",
    description:
      "Web design and local SEO for Roswell, GA small businesses. Custom hand-coded sites from $0 down and $150 per month, built for professional service firms.",
    intro:
      "Roswell has a higher concentration of professional service firms than most of metro Atlanta, and those businesses live or die on whether they look credible before the first phone call. That is a different problem from getting foot traffic, and it needs a different kind of site.",
    sections: [
      {
        heading: "Credibility Does More Work Than Volume Here",
        body: [
          "A law firm, a financial advisor, or a dental practice is not trying to win a thousand clicks. They are trying to convince the twenty people a month who are already considering them. For that audience, a slow or dated site is not a minor annoyance. It is a signal about how the business runs, and it gets read that way before anybody calls.",
          "So the work is different. Clear structure, straight answers to the questions people actually have, an obvious way to get in touch, and no clutter between the visitor and that decision.",
        ],
      },
      {
        heading: "The Historic District Is Its Own Market",
        body: [
          "The shops, galleries, and restaurants around the historic district run on a mix of local regulars and visitors deciding where to go while they are already nearby. That second group is almost entirely mobile, searching in the moment, and choosing from the map results.",
          "For those businesses the priority order flips. The Google Business Profile does the heavy lifting, with hours, photos, and reviews kept current, and the website closes the loop for anyone who wants to look properly before committing.",
        ],
      },
    ],
    industries: [
      "Legal and financial services",
      "Medical and dental practices",
      "Restaurants and hospitality",
      "Retail and galleries",
      "Home services and contractors",
    ],
    proximity: "about 25 minutes east of our home base in Marietta",
  },
  {
    slug: "woodstock-ga",
    city: "Woodstock",
    shortName: "Woodstock",
    description:
      "Web design and local SEO for Woodstock, GA small businesses. Hand-coded websites from $0 down and $150 per month, built to rank in a fast-growing market.",
    intro:
      "Woodstock is growing quickly, and that cuts both ways for a small business. There are more customers arriving every year, and there are more competitors arriving with them. The businesses that get found in the next couple of years will mostly be the ones that started doing the work now.",
    sections: [
      {
        heading: "Growth Means New Customers With No Loyalty Yet",
        body: [
          "A steady stream of people moving into the area means a steady stream of people searching for a dentist, a plumber, a gym, or somewhere to eat, with no existing relationship pulling them anywhere. They pick from what Google shows them.",
          "That is the single best argument for taking local search seriously here. In a static market you are trying to pry customers away from an incumbent. In a growing one you are just trying to be visible at the moment somebody is deciding for the first time.",
        ],
      },
      {
        heading: "Downtown Woodstock Runs On Discovery",
        body: [
          "The downtown strip does real business from people browsing rather than searching for a specific name. Those customers find you through the map, through photos, and through reviews, often while standing a few hundred feet away.",
          "Getting that right is unglamorous and mostly consistency. Complete profile, accurate hours, current photos, questions answered, reviews responded to. We do that work monthly and send you a one page report showing what moved.",
        ],
      },
    ],
    industries: [
      "Restaurants and breweries",
      "Home services and contractors",
      "Medical and dental practices",
      "Retail and boutiques",
      "Fitness and wellness",
    ],
    proximity: "about 20 minutes north of our home base in Marietta",
  },
];
