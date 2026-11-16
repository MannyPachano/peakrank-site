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
import type { FaqItem } from "../lib/faq";

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
  /**
   * Optional questions and answers. Rendered visibly and as FAQPage JSON-LD by
   * PageFaq.astro, so the two always match. Plain text answers only.
   */
  faq?: FaqItem[];
}

export const locations: Location[] = [
  {
    slug: "kennesaw-ga",
    city: "Kennesaw",
    shortName: "Kennesaw",
    description:
      "Web design and local SEO for Kennesaw, GA small businesses. Hand-coded sites at $80 per designed page from one developer you can text or email.",
    intro:
      "Kennesaw is a competitive place to be a small business online. You are up against national franchise locations with corporate marketing budgets, and against the same handful of contractors who have been buying ads here for years. The good news is that most of them are running slow template sites, and that is a gap you can walk straight through.",
    sections: [
      {
        heading: "A College Town Searches Differently",
        body: [
          "Kennesaw State brings tens of thousands of students and staff into the same few square miles, and that changes what people type into Google. Searches skew heavily toward mobile, toward immediacy, and toward price. Somebody looking for a mechanic near campus is not reading a brochure. They are on a phone, comparing three results, and calling whichever one loads first and shows a number.",
          "That is a speed problem before it is a marketing problem. A site that takes four seconds to appear has already lost that person to the result below it. I build static files with nothing to boot up, so they show up immediately on a phone on a bad connection, which is where this traffic actually lives.",
        ],
      },
      {
        heading: "Rental Property And Home Services",
        body: [
          "The rental density around campus keeps a steady stream of work moving for property managers, cleaners, HVAC techs, plumbers, and handymen. That work is almost entirely won through the map results, which means your Google Business Profile matters as much as your website does.",
          "I handle both together. The site gives Google something fast and clearly structured to rank, and the profile work puts you in the three results that appear above everything else. Neither one does much on its own.",
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
  },
  {
    slug: "smyrna-ga",
    city: "Smyrna",
    shortName: "Smyrna",
    description:
      "Web design and local SEO for Smyrna, GA small businesses. Fast hand-coded websites at $80 per designed page, no WordPress and no page builders.",
    intro:
      "Smyrna has changed fast, and the businesses that have kept up online are doing noticeably better than the ones that have not. There is real money moving through this part of Cobb County, and a lot of it goes to whoever turns up first when somebody searches on their phone.",
    sections: [
      {
        heading: "Smyrna Has Many New Businesses Competing For The Same Searches",
        body: [
          "The development around the Battery and along the Cumberland corridor brought in a wave of businesses that launched with a modern site from day one. If yours has not been touched since 2018, the comparison is not subtle. A prospect who opens both in two tabs makes a judgment about which business is still paying attention before reading a word.",
          "This is the most fixable problem on that list. A clean, fast, well-structured site puts you back on even footing, and it does not require the budget the newcomers spent.",
        ],
      },
      {
        heading: "A Younger Audience Judges The Site Itself",
        body: [
          "Smyrna skews young and professional, and that audience treats a website as evidence. They will check your site before calling, they will notice if it is slow, and they will notice if it looks like a template they have seen on three other businesses this month.",
          "Every design I do is drawn from scratch for the business it belongs to. That is not an aesthetic preference. It is the difference between looking like a business somebody chose deliberately and looking like one that picked the cheapest option available.",
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
  },
  {
    slug: "roswell-ga",
    city: "Roswell",
    shortName: "Roswell",
    description:
      "Web design and local SEO for Roswell, GA small businesses. Custom hand-coded sites at $80 per designed page, built for professional service firms.",
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
  },
  {
    slug: "woodstock-ga",
    city: "Woodstock",
    shortName: "Woodstock",
    description:
      "Web design and local SEO for Woodstock, GA small businesses. Hand-coded websites at $80 per designed page, built to rank in a fast-growing market.",
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
          "Getting that right is unglamorous and mostly consistency. Complete profile, accurate hours, current photos, questions answered, reviews responded to. I do that work monthly and send you a one page report showing what moved.",
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
  },
  {
    slug: "acworth-ga",
    city: "Acworth",
    shortName: "Acworth",
    description:
      "Web design and local SEO for Acworth, GA small businesses. Custom coded sites at $80 per designed page and a free homepage mockup in 3 business days.",
    intro:
      "Acworth sits at the north end of Cobb County, where I-75, US 41 and Highway 92 meet Lake Acworth and Lake Allatoona. It's known as the Lake City, and that shapes who searches for local businesses here: people who live in the neighborhoods off Highway 92 and US 41, and people who come up for the lakes in spring and summer.",
    sections: [
      {
        heading: "Acworth Businesses Compete With Kennesaw, Woodstock And Cartersville",
        body: [
          "Acworth borders Kennesaw to the southeast, Woodstock is about 12 miles east on Highway 92 and Cartersville is about 12 miles northwest on US 41. Google's map results don't stop at the city line, so an Acworth plumber or landscaper often shows up next to companies from all three.",
          "Plenty of homes with an Acworth address also sit outside the city limits, in parts of Bartow, Cherokee and Paulding counties. If you work there, a service area page that names those areas tells Google, and the homeowner, that you come to them.",
        ],
      },
      {
        heading: "Lake Season Work Around Lake Acworth And Lake Allatoona",
        body: [
          "The two lakes keep a lot of seasonal work moving: docks and decks, pressure washing, landscaping and other outdoor services. That work gets searched most in spring and summer and drops off in winter.",
          "For a seasonal business, the site needs to be ready before the season starts, with a page for each service people search for. A page that has been live since winter has a better chance of showing up in May than one put up in May.",
        ],
      },
      {
        heading: "New Acworth Homeowners Search For Home Services",
        body: [
          "Acworth grew from about 20,400 people in 2010 to about 22,400 in 2020, according to the US Census. People who just moved in don't have a plumber, a roofer or a lawn service yet, so they search for one and pick from the first few results.",
          "The businesses that show up with a fast site that clearly says what they do and where they work get the first chance at that work. That's the site I build, and the free homepage mockup lets you see it before you pay.",
        ],
      },
    ],
    industries: [
      "Home services and contractors",
      "Landscaping and lawn care",
      "Pressure washing and exterior cleaning",
      "Docks, decks and outdoor services",
      "Restaurants and shops in downtown Acworth",
      "Auto repair",
    ],
    faq: [
      {
        q: "Do you work with businesses in Acworth?",
        a: "Yes. I'm from Marietta, a short drive down I-75, and I work with small businesses in Acworth by email and text.",
      },
      {
        q: "Can my site cover customers outside the Acworth city limits?",
        a: "Yes. A service area page can list every town and county you serve, such as Kennesaw, Cartersville and the parts of Bartow, Cherokee and Paulding counties with Acworth addresses.",
      },
      {
        q: "How much does a website cost for an Acworth business?",
        a: "The same as everywhere else I work: $80 per designed page. A 5 page site is $400, paid half to start and half at launch.",
      },
      {
        q: "How do I see a design before I pay?",
        a: "Request a free homepage mockup. I design your new homepage within 3 business days, and it costs nothing.",
      },
    ],
  },
  {
    slug: "canton-ga",
    city: "Canton",
    shortName: "Canton",
    description:
      "Web design and local SEO for Canton, GA small businesses in Cherokee County. Custom coded sites at $80 per designed page, with a free homepage mockup.",
    intro:
      "Canton is the county seat of Cherokee County, about forty miles north of Atlanta on I-575, with the Etowah River running through the middle of town. It has grown fast: from about 7,700 people in 2000 to about 33,000 in 2020. Most of those new residents arrived without a plumber, a roofer or a lawn service, so they search, and they pick from what Google shows them.",
    sections: [
      {
        heading: "Canton Businesses Compete Along I-575",
        body: [
          "Canton sits between Holly Springs to the south and Ball Ground to the north, with Woodstock a little further down I-575. Google's map results don't stop at the city line, so a Canton contractor often shows up next to companies from all three.",
          "A service area page that names the towns you actually cover gives Google something to match, and it tells a homeowner in Holly Springs or Ball Ground right away that you come to them.",
        ],
      },
      {
        heading: "Riverstone Parkway And Downtown Canton",
        body: [
          "The shopping centers along Riverstone Parkway draw people from across the county, and downtown Canton, around the Historic Canton Theatre on Main Street, has its own restaurants and shops. Those businesses mostly get found through the map results and a quick look at the website before someone drives over.",
          "For them, the Google Business Profile and the website have to agree: same hours, same services, same address. I set the site up so changing that information takes a minute in the editor.",
        ],
      },
      {
        heading: "New Canton Neighborhoods Mean New Customers For Home Services",
        body: [
          "New subdivisions bring steady demand for HVAC service, landscaping, pest control, cleaning and repairs. A homeowner who just moved in doesn't know any local names yet. They search for the service and the town, compare two or three sites and contact the one that answers their questions fastest.",
          "That is where a fast, clear website earns its cost. It should say what you do, which parts of Cherokee County you cover and how to reach you, on a phone, in a few seconds.",
        ],
      },
    ],
    industries: [
      "Home services and contractors",
      "Landscaping and lawn care",
      "Pest control and cleaning",
      "Restaurants and shops in downtown Canton",
      "Retail along Riverstone Parkway",
      "Medical and professional offices",
    ],
    faq: [
      {
        q: "Do you work with businesses in Canton and the rest of Cherokee County?",
        a: "Yes. I work with small businesses in Canton, Holly Springs, Ball Ground, Woodstock and the rest of Cherokee County by email and text.",
      },
      {
        q: "Should my site have a page for each town I serve?",
        a: "Start with one service area page that names each town. Separate town pages make sense once you have something different to say about each one, such as jobs you've done there.",
      },
      {
        q: "How much does a website cost for a Canton business?",
        a: "$80 per designed page, the same as everywhere I work. A 5 page site is $400, half up front and half at launch.",
      },
      {
        q: "What happens after the free homepage mockup?",
        a: "If you like it, I design the remaining pages at $80 each, with unlimited design changes. If you don't, you owe nothing.",
      },
    ],
  },
  {
    slug: "cartersville-ga",
    city: "Cartersville",
    shortName: "Cartersville",
    description:
      "Web design and local SEO for Cartersville, GA and Bartow County businesses. Custom coded sites at $80 per designed page, with a free homepage mockup.",
    intro:
      "Cartersville is the county seat of Bartow County, about 42 miles northwest of downtown Atlanta on I-75. US 41, US 411 and State Route 20 all run through town, the Etowah River passes nearby, and Lake Allatoona and Red Top Mountain State Park sit just outside the city limits. About 23,200 people lived in the city in 2020, and the businesses here serve customers from across the county.",
    sections: [
      {
        heading: "Cartersville Businesses Serve All Of Bartow County",
        body: [
          "Customers here come from Adairsville, Emerson, Euharlee, Kingston and White as well as from Cartersville itself, and from Acworth about 12 miles down US 41. A plumber or a tree service based in town usually covers most of the county.",
          "Google's map results favor businesses close to the person searching, so in a spread-out county the website has to make your coverage clear. A service area page that names each town tells Google where you work, and it tells a homeowner in Adairsville or Emerson right away that you come to them.",
        ],
      },
      {
        heading: "Visitors For The Museums, The Etowah Mounds And Lake Allatoona",
        body: [
          "The Booth Western Art Museum and the Tellus Science Museum bring visitors into town, the Etowah Indian Mounds sit just south of the city and Red Top Mountain State Park draws people to the lake. Many of those visitors don't know the area, so they search on a phone for a place to eat, shop or stay.",
          "For restaurants, shops and lodging, the Google Business Profile and the website have to agree on hours, address and menu or services, and the site has to load quickly on a phone with a weak signal.",
        ],
      },
      {
        heading: "Manufacturing Employers And The Service Work Around Them",
        body: [
          "Manufacturing is a big part of the Cartersville economy, with employers such as Shaw Industries, Anheuser-Busch and Komatsu, and Piedmont Cartersville Medical Center is in town too. Plants and offices need commercial cleaning, HVAC, electrical work and pest control, and the people who work there need the same services at home.",
          "If you take commercial jobs, a separate commercial page lets a facility manager see that right away without reading through your residential services.",
        ],
      },
    ],
    industries: [
      "Home services and contractors",
      "Commercial cleaning and facility services",
      "Tree service and landscaping",
      "Restaurants and shops in downtown Cartersville",
      "Outdoor and lake services near Lake Allatoona",
      "Medical and professional offices",
    ],
    faq: [
      {
        q: "Do you work with businesses in Cartersville and the rest of Bartow County?",
        a: "Yes. My business is based in Marietta, down I-75 in Cobb County, and I work with small businesses across Bartow County by email and text.",
      },
      {
        q: "Should my site have separate pages for residential and commercial work?",
        a: "If you do both, yes. Homeowners and facility managers ask different questions and search with different words, so each needs its own page.",
      },
      {
        q: "How much does a website cost for a Cartersville business?",
        a: "$80 per designed page, the same as everywhere I work. A 5 page site is $400, paid half to start and half at launch.",
      },
      {
        q: "Can I update my hours and services myself?",
        a: "Yes. You get a simple editor for text, photos and prices, so changing your hours takes a minute.",
      },
    ],
  },
  {
    slug: "powder-springs-ga",
    city: "Powder Springs",
    shortName: "Powder Springs",
    description:
      "Web design and local SEO for Powder Springs, GA businesses in southwest Cobb County. Custom coded sites at $80 per page and a free homepage mockup.",
    intro:
      "Powder Springs is in southwest Cobb County, about 22 miles west of downtown Atlanta by US 278 and I-20. The city grew from about 13,900 people in 2010 to about 16,900 in 2020, and it takes its name from the seven springs inside the city limits. Most businesses here are small and local, and most of their customers find them on a phone.",
    sections: [
      {
        heading: "Powder Springs Businesses Work Along US 278 From Austell To Dallas",
        body: [
          "US 278, known as C. H. James Parkway through town, runs about 5 miles southeast to Austell and about 11 miles northwest to Dallas, passing through Hiram on the way. A contractor based in Powder Springs usually works in all of those towns, on both sides of the line between Cobb and Paulding counties.",
          "Google's map results don't stop at the county line, so a Powder Springs business shows up next to companies from Hiram and Austell. A service area page that names each town you cover gives Google something to match and tells the homeowner right away that you come to them.",
        ],
      },
      {
        heading: "Downtown Powder Springs And The Silver Comet Trail",
        body: [
          "The Silver Comet Trail runs through Powder Springs, with trailhead parking on Richard D. Sailors Parkway. Downtown, with its shops and Thurman Springs Park and amphitheater, draws people from the trail and from the neighborhoods around it.",
          "For a restaurant or a shop near the trail or downtown, the map listing and the website need to agree on hours and location, and the site needs to load fast on a phone. I set the site up so changing that information takes a minute in the editor.",
        ],
      },
      {
        heading: "Small Local Companies Compete With Metro Atlanta Advertisers",
        body: [
          "A Powder Springs homeowner who searches for a plumber or a roofer sees results from across southwest Cobb and from large metro Atlanta companies with big ad budgets. A small local company can still hold its own with a site that loads fast, names the towns it covers and makes it easy to get in touch from a phone.",
          "That's the site I build, at $80 per designed page, and the free homepage mockup lets you see it before you pay.",
        ],
      },
    ],
    industries: [
      "Home services and contractors",
      "Landscaping and lawn care",
      "Restaurants and shops in downtown Powder Springs",
      "Businesses near the Silver Comet Trail",
      "Auto repair",
      "Cleaning and pest control",
    ],
    faq: [
      {
        q: "Do you work with businesses in Powder Springs?",
        a: "Yes. My business is based in Marietta, also in Cobb County, and I work with Powder Springs businesses by email and text.",
      },
      {
        q: "Can my site cover Hiram, Austell and Dallas too?",
        a: "Yes. A service area page can name every town you cover, including the ones across the county line in Paulding County.",
      },
      {
        q: "How much does a website cost for a Powder Springs business?",
        a: "$80 per designed page. A 5 page site is $400, with half due to start and half at launch.",
      },
      {
        q: "What do I need to send for the free homepage mockup?",
        a: "Your current website address, or a few lines about your business if you don't have a site yet. I email you the design within 3 business days.",
      },
    ],
  },
  {
    slug: "dallas-ga",
    city: "Dallas",
    shortName: "Dallas",
    description:
      "Web design and local SEO for Dallas, GA and Paulding County businesses. Custom coded sites at $80 per designed page, with a free homepage mockup.",
    intro:
      "Dallas is the county seat of Paulding County, about 30 miles from downtown Atlanta. US 278 runs through town, where it meets State Routes 61 and 120, and the Silver Comet Trail crosses the county. The city grew from about 11,500 people in 2010 to about 14,000 in 2020, and Paulding County grew from about 142,000 to about 169,000 over the same years.",
    sections: [
      {
        heading: "A Dallas, Georgia Website Has To Say Georgia",
        body: [
          "Dallas, Texas is a much bigger city with the same name, so a search for a plumber or a roofer in Dallas can pull up results from Texas. Your customers know where they live, but Google needs the help. Your page titles, your service area page and your Google Business Profile should all say Dallas, GA and Paulding County.",
          "Naming the places around you that only exist in Georgia, like Hiram and the other Paulding County towns you cover, makes the location clear to Google and to the person reading.",
        ],
      },
      {
        heading: "Paulding County Is One Of The Fastest Growing Counties In Georgia",
        body: [
          "The New Georgia Encyclopedia lists Paulding among the fastest-growing counties in the state, and parts of it have become bedroom communities for Cobb County and Atlanta. Every new household needs HVAC service, pest control, lawn care, cleaning and repairs, and most of them don't know any local names yet.",
          "People searching after a move compare two or three results on a phone and contact whichever one answers their questions fastest. A fast site that names the Paulding towns you serve gets that first chance.",
        ],
      },
      {
        heading: "Historic Downtown Dallas And The Silver Comet Trail",
        body: [
          "Downtown Dallas centers on the historic Paulding County Courthouse, built in 1892, with Civil War Trailhead Park on Main Street. The Silver Comet Trail runs through the county and crosses the Pumpkinvine Creek Trestle, and the 1864 battles of Dallas, New Hope Church and Pickett's Mill were fought nearby.",
          "Restaurants and shops downtown get found through the map results by people out for the day. The website and the Google Business Profile should agree on hours and location, and the site should load fast on a phone.",
        ],
      },
    ],
    industries: [
      "Home services and contractors",
      "HVAC, pest control and lawn care for new homeowners",
      "Cleaning services",
      "Restaurants and shops in downtown Dallas",
      "Auto repair",
      "Medical and professional offices",
    ],
    faq: [
      {
        q: "Do you work with businesses in Dallas and the rest of Paulding County?",
        a: "Yes. I work with small businesses in Dallas, Hiram and across Paulding County by email and text.",
      },
      {
        q: "How do I keep my site from being confused with Dallas, Texas?",
        a: "Use Dallas, GA in your page titles, name Paulding County and the towns you serve on a service area page and keep the same address on your Google Business Profile. I set the titles and the service area page up as part of the build.",
      },
      {
        q: "How much does a website cost for a Dallas, GA business?",
        a: "$80 per designed page. A 5 page site is $400, paid half up front and half at launch.",
      },
      {
        q: "What if I don't like the design?",
        a: "Design changes are unlimited until you approve it. If you're still not 100% happy with the design, you get your money back.",
      },
    ],
  },
];
