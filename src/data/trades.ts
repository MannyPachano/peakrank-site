/**
 * Trade pages, rendered by src/pages/web-design-for-[trade].astro at
 * /web-design-for-{slug}.
 *
 * Same rule as locations.ts: every page needs its own copy. Swapping the trade
 * name across one template is the doorway-page pattern. What differs here is how
 * each trade's customers search, what they check before they reach out, and
 * which pages that trade's site needs. The offer facts (price, payment, design
 * guarantee, editor, hosting, support, local SEO) are the same for everyone, so
 * they live once in the template.
 *
 * No claims about clients in these trades. There are none yet. When the first
 * trade site is finished, it goes on that trade's page as real work.
 *
 * FAQ answers are plain text: PageFaq.astro puts the same strings into the
 * FAQPage JSON-LD.
 */
import type { FaqItem } from "../lib/faq";

export interface TradePagePlan {
  name: string;
  why: string;
}

export interface Trade {
  /** URL slug, becomes /web-design-for-{slug}. */
  slug: string;
  /** Plural label for the eyebrow, the footer and FAQ heading ("Plumbers"). */
  label: string;
  /** Link text used on other pages ("Web design for plumbers"). */
  linkText: string;
  /** Title case, for headings ("Plumbing Website"). */
  siteHeading: string;
  /** Lower case, for sentences ("plumbing website"). */
  siteNoun: string;
  /** Title case, for the local SEO heading ("Plumbing Companies"). */
  businessesHeading: string;
  title: string;
  /** Meta description. Under 155 characters. */
  description: string;
  h1: string;
  subtitle: string;
  intro: string;
  /** How this trade's customers search and decide. */
  sections: { heading: string; body: string[] }[];
  pagesHeading: string;
  pagesIntro: string;
  /** The suggested page plan. The template prices it at $80 per page. */
  pages: TradePagePlan[];
  homepageHeading: string;
  homepage: string[];
  faq: FaqItem[];
}

export const trades: Trade[] = [
  {
    slug: "plumbers",
    label: "Plumbers",
    linkText: "Web design for plumbers",
    siteHeading: "Plumbing Website",
    siteNoun: "plumbing website",
    businessesHeading: "Plumbing Companies",
    title: "Web Design for Plumbers | $80 Per Page | PeakRanking",
    description:
      "Custom coded websites for plumbing companies at $80 per designed page. Get a free homepage mockup of your plumbing site within 3 business days.",
    h1: "Website Design for Plumbing Companies",
    subtitle: "Custom Coded Plumbing Websites At $80 Per Page",
    intro:
      "Most people look for a plumber when something has already gone wrong. A pipe is leaking, a drain is backed up or the water heater quit. They're on a phone, they're in a hurry and they're comparing two or three results. I design and build plumbing websites that answer their first three questions within seconds: do you do this job, do you work in my town and how do I reach you.",
    sections: [
      {
        heading: "How People Search For A Plumber",
        body: [
          "Plumbing searches come in two kinds. The urgent ones, like a burst pipe or a sewer backup, happen on a phone and end fast. The planned ones, like replacing a water heater or repiping an older house, take longer, and people read more than one site before they pick a company.",
          "A plumbing site has to work for both. The phone number and the quote button sit at the top of every page for the person with water on the floor. The service pages carry the detail the planner reads: what the job involves, what affects the price and which towns you cover.",
        ],
      },
      {
        heading: "Why Each Plumbing Service Needs Its Own Page",
        body: [
          "When someone searches for water heater replacement in their town, Google looks for a page about water heater replacement. A single services page that lists ten jobs in one paragraph rarely ranks for any of them.",
          "Separate pages help the visitor too. A homeowner with a slow kitchen drain doesn't want to scroll past repiping and gas line work to find out whether you clear drains.",
        ],
      },
    ],
    pagesHeading: "Pages A Plumbing Website Needs",
    pagesIntro:
      "This is the plan I'd start with for a small plumbing company. We can add or drop pages based on the work you want more of.",
    pages: [
      {
        name: "Home",
        why: "Your main services, the towns you cover, your phone number and a quote button, all visible on a phone without much scrolling.",
      },
      {
        name: "Drain cleaning",
        why: "Clogged drains, main line backups and camera inspections if you offer them.",
      },
      {
        name: "Water heaters",
        why: "Repair and replacement, tank and tankless, and the brands you work on.",
      },
      {
        name: "Leak repair and repiping",
        why: "Slab leaks, burst pipes and whole house repiping for older homes.",
      },
      {
        name: "Service area",
        why: "The towns and neighborhoods you cover, so people inside your area know you come to them.",
      },
      {
        name: "About and contact",
        why: "Who runs the company, your license details and a short quote request form.",
      },
    ],
    homepageHeading: "What A Plumbing Homepage Has To Show",
    homepage: [
      "A phone number people can tap to dial, at the top of the page",
      "The jobs you do, named the way customers say them: drain cleaning, water heater, leak repair",
      "The towns you cover",
      "Your hours, and whether you take after-hours jobs",
      "Your license number, where your state issues one",
      "Real photos of your trucks and your crew",
    ],
    faq: [
      {
        q: "How much does a plumbing website cost?",
        a: "It's $80 per designed page. A 5 page plumbing site is $400, and the 6 page plan on this page is $480. You pay half to start and half at launch.",
      },
      {
        q: "Can you add an emergency plumbing page?",
        a: "Yes. If you take after-hours jobs, an emergency plumbing page is worth having, because people search for it by name. It's $80 like any other page.",
      },
      {
        q: "Can I update my services and prices myself?",
        a: "Yes. You get a simple editor for changing text, photos and prices. You don't need to know any code.",
      },
      {
        q: "Do you do local SEO for plumbers?",
        a: "Yes. Local SEO is $799 a month with a 3 month minimum. We agree on the targets in writing first, and if they aren't met after 3 months, you get all $2,397 back.",
      },
    ],
  },
  {
    slug: "hvac",
    label: "HVAC Companies",
    linkText: "Web design for HVAC companies",
    siteHeading: "HVAC Website",
    siteNoun: "HVAC website",
    businessesHeading: "HVAC Companies",
    title: "HVAC Website Design for Small Companies | PeakRanking",
    description:
      "HVAC websites custom coded at $80 per designed page. Seasonal service pages, a clear service area and a free homepage mockup within 3 business days.",
    h1: "Website Design for HVAC Companies",
    subtitle: "Custom Coded HVAC Websites At $80 Per Page",
    intro:
      "HVAC work follows the weather. Air conditioning searches climb with the first hot week of the year, and furnace and heat pump searches climb when it turns cold. I design HVAC websites with a page ready for each of those jobs before the season starts, so the site isn't catching up when the work is already coming in.",
    sections: [
      {
        heading: "How HVAC Searches Change With The Seasons",
        body: [
          "In summer, people search for AC repair, AC not cooling and AC replacement. In winter it's furnace repair, heat pump repair and no heat. Spring and fall bring tune-up and maintenance searches. Each of those is its own page on a well planned HVAC site.",
          "A page that has been live for months has a better chance of ranking than one added the week the heat wave starts. That's why I plan the seasonal pages into the first build.",
        ],
      },
      {
        heading: "Repair Visitors And Replacement Visitors Need Different Pages",
        body: [
          "Someone whose AC stopped working wants to know if you can come soon and how to reach you. Someone pricing a new system wants to know which brands you install, whether you offer financing and how the job goes from estimate to install.",
          "Putting both on one page makes it worse for each of them. A repair page stays short and puts the phone number first. An installation page gives the detail a bigger purchase needs.",
        ],
      },
      {
        heading: "A Page For Your HVAC Maintenance Plan",
        body: [
          "If you sell a maintenance plan, it deserves its own page that says what each visit covers, how often you come and what it costs. It gives a one-time repair customer a clear reason to stay with you.",
        ],
      },
    ],
    pagesHeading: "Pages A Small HVAC Company Needs",
    pagesIntro:
      "This is the plan I'd start with for a small heating and cooling company. If you only do residential work, or only cooling, we drop what doesn't fit.",
    pages: [
      {
        name: "Home",
        why: "Heating and cooling both named near the top, the towns you cover and a way to reach you, readable on a phone in a few seconds.",
      },
      {
        name: "Air conditioning repair",
        why: "The summer page: AC not cooling, strange noises, frozen coils and other common problems.",
      },
      {
        name: "Heating repair",
        why: "The winter page: furnaces and heat pumps, and what to check before you book a visit.",
      },
      {
        name: "System replacement and installation",
        why: "Brands you install, how estimates work and financing if you offer it.",
      },
      {
        name: "Maintenance plans",
        why: "What each tune-up covers, how often you come and the price.",
      },
      {
        name: "Service area",
        why: "The towns and counties you cover.",
      },
      {
        name: "About and contact",
        why: "Your license and insurance details, your team and a quote request form.",
      },
    ],
    homepageHeading: "What An HVAC Homepage Has To Show",
    homepage: [
      "Heating and cooling both named near the top, so a visitor in either season sees their problem",
      "A tap-to-dial phone number and a quote request button",
      "The brands you install and service",
      "Financing, if you offer it",
      "The towns you cover",
      "Your license number, where your state requires one",
    ],
    faq: [
      {
        q: "How much does an HVAC website cost?",
        a: "Each designed page is $80. A 5 page site is $400, and the 7 page plan on this page comes to $560. Half is due to start and half at launch.",
      },
      {
        q: "Should AC repair and heating repair be separate pages?",
        a: "Yes, in most cases. People search for them with different words at different times of year, and Google ranks the page that matches the search.",
      },
      {
        q: "Can I add a page for each brand I install?",
        a: "You can. Each one is another designed page at $80. I'd start with the brands you install most and add others later.",
      },
      {
        q: "Can I change my seasonal offers myself?",
        a: "Yes. The editor lets you change text, prices and photos, so you can swap a summer tune-up offer for a winter one without waiting on me.",
      },
      {
        q: "Do you do local SEO for HVAC companies?",
        a: "Yes, for $799 a month with a 3 month minimum. The targets go in writing before I start. If they aren't met after 3 months, I refund all $2,397. After that it's $399 a month.",
      },
    ],
  },
  {
    slug: "roofers",
    label: "Roofers",
    linkText: "Web design for roofers",
    siteHeading: "Roofing Website",
    siteNoun: "roofing website",
    businessesHeading: "Roofing Contractors",
    title: "Roofing Website Design | $80 Per Page | PeakRanking",
    description:
      "Custom roofing contractor websites at $80 per designed page, with unlimited design changes and money back if you're not happy with the design.",
    h1: "Website Design for Roofing Contractors",
    subtitle: "Custom Coded Roofing Websites At $80 Per Page",
    intro:
      "A new roof is one of the biggest bills a homeowner pays, so people check a roofer carefully before they reach out. They look at your photos, your reviews, the towns you work in and whether you seem like a company that will still be around when the warranty matters. I design roofing websites that put that proof where it's easy to find.",
    sections: [
      {
        heading: "What Homeowners Check On A Roofer's Website",
        body: [
          "Most homeowners compare a few roofers before they ask for an estimate. They want to see real jobs, ideally in their own area, the materials you install, your warranty and how long you've been in business.",
          "Stock photos of perfect roofs don't answer any of that. Your own job photos do, even if they were taken on a phone. I lay them out so they load fast and show the work clearly.",
        ],
      },
      {
        heading: "Storm Damage And Insurance Work Needs Its Own Page",
        body: [
          "After a hail or wind storm, people search for storm damage repair and roof insurance claims. If you help homeowners through the claim, a page that explains how your company handles it is worth more than one line on the services page.",
          "Keep that page factual: what you inspect, what you document and what the homeowner handles with their insurance company. That's the information people go looking for.",
        ],
      },
      {
        heading: "Roof Repair Pages And Roof Replacement Pages Reach Different People",
        body: [
          "A leak after a storm and a 25 year old roof that needs replacing are different searches. A repair page should be short, with a fast way to reach you. A replacement page should cover materials, the steps of the job and how estimates work.",
        ],
      },
    ],
    pagesHeading: "Pages A Roofing Website Needs",
    pagesIntro:
      "This is the plan I'd start with for a residential roofer. If you do commercial or flat roofs, that becomes a page of its own.",
    pages: [
      {
        name: "Home",
        why: "Photos of your work, the towns you cover and an estimate request button near the top.",
      },
      {
        name: "Roof replacement",
        why: "Materials you install, how the job runs from tear-off to cleanup and your warranty.",
      },
      {
        name: "Roof repair",
        why: "Leaks, missing shingles and flashing, kept short with a fast way to reach you.",
      },
      {
        name: "Storm damage and insurance claims",
        why: "How you inspect and document storm damage and what the homeowner does next.",
      },
      {
        name: "Project gallery",
        why: "Your own job photos, grouped by roof type or by town.",
      },
      {
        name: "Service area",
        why: "The towns and counties you work in.",
      },
      {
        name: "About and contact",
        why: "Your license and insurance details, years in business and an estimate request form.",
      },
    ],
    homepageHeading: "What A Roofing Homepage Has To Show",
    homepage: [
      "Photos of roofs you've actually installed",
      "The towns you work in",
      "The roofing materials you install, such as asphalt shingle, metal or flat roofs",
      "Your warranty in plain words",
      "An estimate request button near the top and again lower down",
      "Your license and insurance details",
    ],
    faq: [
      {
        q: "How much does a roofing website cost?",
        a: "$80 per designed page. A 5 page roofing site is $400, and the 7 page plan on this page is $560, paid half up front and half at launch.",
      },
      {
        q: "Can I use my own job photos?",
        a: "Yes, and I recommend it. Phone photos are fine. I resize and compress them so the pages still load fast.",
      },
      {
        q: "Can I add new projects to the gallery myself?",
        a: "Yes. The editor lets you add photos and short project notes after launch.",
      },
      {
        q: "Should storm damage have its own page?",
        a: "If you do storm and insurance work, yes. People search for it directly after a storm, and a dedicated page can explain how you handle it.",
      },
    ],
  },
  {
    slug: "landscapers",
    label: "Landscapers",
    linkText: "Web design for landscapers",
    siteHeading: "Landscaping Website",
    siteNoun: "landscaping website",
    businessesHeading: "Landscaping And Lawn Care Companies",
    title: "Landscaping Website Design | $80 Per Page | PeakRanking",
    description:
      "Websites for landscaping and lawn care companies, custom coded at $80 per designed page. Request a free homepage mockup within 3 business days.",
    h1: "Website Design for Landscaping and Lawn Care Companies",
    subtitle: "Custom Coded Landscaping Websites At $80 Per Page",
    intro:
      "Landscaping companies usually sell two different things. Lawn care is recurring work, and people shopping for it compare price, schedule and whether you cover their street. Landscape design and hardscaping are projects, and people shopping for those want to see what you've built. I design landscaping websites that give each kind of customer the page they're looking for.",
    sections: [
      {
        heading: "Lawn Care Visitors And Project Visitors Want Different Things",
        body: [
          "Someone looking for weekly mowing wants to know what's included, how often you come and how to get a quote. They don't need a long gallery. Someone planning a patio, a retaining wall or a full backyard wants to see finished projects before anything else.",
          "Splitting those into separate pages keeps each one short and on point, and it gives Google a clear page for lawn care searches and another for landscape design searches.",
        ],
      },
      {
        heading: "Landscaping Project Photos That Load Fast On A Phone",
        body: [
          "Photos sell landscaping work, and they're also what makes most landscaping sites slow. Full size photos straight from a camera can take seconds to load on a phone.",
          "I resize every photo for the screen it's shown on and load gallery images only as the visitor scrolls to them, so the gallery stays fast even with a lot of projects in it.",
        ],
      },
      {
        heading: "Seasonal Landscaping Services Through The Year",
        body: [
          "Spring cleanups, fall leaf removal, aeration and overseeding each get searched in their season. A short page for your seasonal services gives you something to link from your emails and your Google Business Profile when that time of year comes around.",
        ],
      },
    ],
    pagesHeading: "Pages A Landscaping Website Needs",
    pagesIntro:
      "This is the plan I'd start with for a company that does both lawn care and landscape projects. A lawn care only company can start smaller, as the questions below explain.",
    pages: [
      {
        name: "Home",
        why: "Lawn care and landscape projects shown as two clear choices, with a quote button on both.",
      },
      {
        name: "Lawn care and maintenance",
        why: "What a visit includes, how often you come and how quotes work.",
      },
      {
        name: "Landscape design and installation",
        why: "Planting, beds, sod and full yard projects, with photos.",
      },
      {
        name: "Hardscaping",
        why: "Patios, retaining walls and walkways, with photos of your own builds.",
      },
      {
        name: "Seasonal services",
        why: "Spring and fall cleanups, aeration, overseeding and anything else you sell by season.",
      },
      {
        name: "Project gallery",
        why: "Finished jobs, grouped by type so a visitor finds the kind of project they're planning.",
      },
      {
        name: "Service area",
        why: "The towns and neighborhoods you cover.",
      },
    ],
    homepageHeading: "What A Landscaping Homepage Has To Show",
    homepage: [
      "Lawn care and landscape projects shown as separate choices",
      "A quote request button on every page",
      "Photos of your own finished work",
      "The neighborhoods and towns you cover",
      "What a regular lawn care visit includes",
    ],
    faq: [
      {
        q: "How much does a landscaping website cost?",
        a: "$80 per designed page, so a 5 page site is $400. The 7 page plan on this page is $560. Half is paid to start and half at launch.",
      },
      {
        q: "I only do lawn care. Do I need all these pages?",
        a: "No. A lawn care company can start with a home page, a lawn care page, a seasonal services page, a service area page and a contact page. That's 5 pages for $400.",
      },
      {
        q: "Can I post new project photos myself?",
        a: "Yes. The editor lets you add photos to the gallery and change text without touching any code.",
      },
      {
        q: "Can customers request a quote from the site?",
        a: "Yes. I add a quote request form, and the requests go to your email.",
      },
    ],
  },
  {
    slug: "pressure-washing",
    label: "Pressure Washing Companies",
    linkText: "Web design for pressure washing companies",
    siteHeading: "Pressure Washing Website",
    siteNoun: "pressure washing website",
    businessesHeading: "Pressure Washing Companies",
    title: "Pressure Washing Website Design | PeakRanking",
    description:
      "A custom website for your pressure washing business at $80 per designed page. 5 pages is $400. Free homepage mockup within 3 business days.",
    h1: "Website Design for Pressure Washing Businesses",
    subtitle: "Custom Coded Pressure Washing Websites At $80 Per Page",
    intro:
      "Pressure washing is easy to show and hard to describe. A dirty driveway next to the same driveway clean says more than a paragraph can. I design pressure washing websites around your before and after photos, with a quote request close by on every page.",
    sections: [
      {
        heading: "Before And After Photos Do Most Of The Selling",
        body: [
          "People shopping for pressure washing want proof that the result is worth paying for. Pairs of photos taken from the same spot, before and after, answer that faster than anything you can write.",
          "I lay the pairs out side by side on a computer and stacked on a phone, sized so they load quickly. You can add new pairs yourself through the editor as you finish jobs.",
        ],
      },
      {
        heading: "Soft Washing And Pressure Washing Are Different Searches",
        body: [
          "Homeowners search for house washing, roof cleaning, driveway cleaning and deck cleaning as separate jobs. If you soft wash roofs and siding, give it its own page. People who know the difference search for it by name, and people who don't will read a short explanation of why a roof gets low pressure.",
        ],
      },
      {
        heading: "Moving A Pressure Washing Business Off A Template Site",
        body: [
          "Many pressure washing businesses start on a free website builder, which makes sense in the first year. The problems show up later: a builder address instead of your own domain, template text that was never replaced and pages that load slowly on a phone. A rebuild at $80 per page fixes those without a big bill.",
        ],
      },
    ],
    pagesHeading: "Pages A Pressure Washing Website Needs",
    pagesIntro:
      "This is the plan I'd start with for a residential pressure washing business. If you don't do commercial work, that page comes out and the site is $80 less.",
    pages: [
      {
        name: "Home",
        why: "Your best before and after pairs, the surfaces you clean and a quote button near the top.",
      },
      {
        name: "House and roof soft washing",
        why: "Siding and roof cleaning, and why you use low pressure on them.",
      },
      {
        name: "Driveways and concrete",
        why: "Driveways, sidewalks, patios and pool decks.",
      },
      {
        name: "Decks and fences",
        why: "Wood and composite decks, fences and the care each one needs.",
      },
      {
        name: "Commercial pressure washing",
        why: "Storefronts, parking areas and dumpster pads, if you take commercial jobs.",
      },
      {
        name: "Before and after gallery",
        why: "Every pair you want to show, grouped by surface.",
      },
      {
        name: "Service area",
        why: "The towns and neighborhoods you cover.",
      },
    ],
    homepageHeading: "What A Pressure Washing Homepage Has To Show",
    homepage: [
      "Two or three of your best before and after pairs near the top",
      "The surfaces you clean: houses, roofs, driveways, decks, storefronts",
      "A quote request button that is never more than a short scroll away",
      "The towns you cover",
      "Whether you're insured",
    ],
    faq: [
      {
        q: "How much does a pressure washing website cost?",
        a: "$80 per designed page. A 5 page site is $400 and the 7 page plan on this page is $560, half up front and half at launch.",
      },
      {
        q: "Can I start with fewer pages?",
        a: "Yes. Many pressure washing businesses start with a home page, a page for each main service, a gallery and a contact page, then add pages later at $80 each.",
      },
      {
        q: "What photos should I send you?",
        a: "Before and after pairs taken from the same spot and angle work best. Phone photos are fine. I crop and compress them for the site.",
      },
      {
        q: "I'm on a free website builder now. Can I keep my domain?",
        a: "Yes. If you own the domain, I point it at the new site. If it was registered through the builder, I help you move it to an account in your name.",
      },
    ],
  },
  {
    slug: "electricians",
    label: "Electricians",
    linkText: "Web design for electricians",
    siteHeading: "Electrician Website",
    siteNoun: "electrician website",
    businessesHeading: "Electricians",
    title: "Electrician Website Design | $80 Per Page | PeakRanking",
    description:
      "Custom coded websites for electricians and electrical contractors at $80 per designed page. Get a free homepage mockup within 3 business days.",
    h1: "Website Design for Electricians and Electrical Contractors",
    subtitle: "Custom Coded Electrician Websites At $80 Per Page",
    intro:
      "People look for an electrician in one of two situations. Something stopped working, like half the house lost power or a breaker keeps tripping, and they want someone soon. Or they're planning a job, like a panel upgrade, an EV charger or a backup generator, and they want to be sure the company is licensed and knows that work. I design electrician websites for both: a fast way to reach you at the top of every page, and a page with real detail for each planned job.",
    sections: [
      {
        heading: "Homeowners Check An Electrician's License Before They Reach Out",
        body: [
          "Most homeowners know that bad electrical work can start a fire. Before they send a quote request, many of them look for a license number, proof of insurance and whether the company pulls permits. If your site makes them hunt for that, they go back to the search results and pick someone else.",
          "I put your license number and insurance details in the footer of every page and on the about page, so they're visible wherever a visitor lands.",
        ],
      },
      {
        heading: "EV Chargers, Generators And Panel Upgrades Are Searched By Name",
        body: [
          "A homeowner who just bought an electric car searches for EV charger installation. The same goes for standby generators and panel upgrades. These are bigger jobs, and people read before they choose.",
          "A page for each one, covering what the job involves, what affects the price and how long it takes, gives Google a page to match to that search. It also gives the homeowner the detail they want before they ask you for a quote.",
        ],
      },
      {
        heading: "Residential And Commercial Electrical Work On Separate Pages",
        body: [
          "If you also do commercial work, give it its own page. A property manager or business owner wants to read about tenant build-outs, lighting retrofits and work scheduled outside business hours. A homeowner with a dead outlet doesn't need any of that between them and your phone number.",
        ],
      },
    ],
    pagesHeading: "Pages An Electrician Website Needs",
    pagesIntro:
      "This is the plan I'd start with for a small residential electrical company. If you don't install EV chargers or generators, that page comes out and the site is $80 less.",
    pages: [
      {
        name: "Home",
        why: "The jobs you do, the towns you cover, your license number and a tap-to-text phone number near the top.",
      },
      {
        name: "Electrical repair and troubleshooting",
        why: "Tripping breakers, dead outlets, flickering lights and partial power loss, kept short with a fast way to reach you.",
      },
      {
        name: "Panel upgrades and rewiring",
        why: "Panel replacements, older homes that need rewiring and what an inspection involves.",
      },
      {
        name: "EV chargers and generators",
        why: "Home EV charger installs and standby generators, and the brands you're set up to install.",
      },
      {
        name: "Lighting and fixtures",
        why: "Recessed lighting, ceiling fans, outdoor and landscape lighting.",
      },
      {
        name: "Service area",
        why: "The towns and counties you cover.",
      },
      {
        name: "About and contact",
        why: "Your license and insurance details, who does the work and a quote request form.",
      },
    ],
    homepageHeading: "What An Electrician Homepage Has To Show",
    homepage: [
      "A phone number people can tap on a phone, at the top of the page",
      "Your state license number and proof of insurance",
      "The jobs you do, named the way homeowners say them: breaker keeps tripping, panel upgrade, EV charger",
      "Your hours, and whether you take emergency jobs",
      "Residential and commercial work as separate choices, if you do both",
      "The towns you cover",
    ],
    faq: [
      {
        q: "How much does an electrician website cost?",
        a: "$80 per designed page. A 5 page site is $400, and the 7 page plan on this page is $560. Half is due to start and half at launch.",
      },
      {
        q: "Should EV charger installation have its own page?",
        a: "If it's work you want more of, yes. People search for it by name, and a page about EV chargers has a much better chance of showing up for that search than one line on a general services page.",
      },
      {
        q: "Where should my license number go on the site?",
        a: "In the footer of every page and on the about page. Visitors check it before they reach out, so it should take no more than a glance to find.",
      },
      {
        q: "Can I add pages later for new services?",
        a: "Yes. Each new page is $80. You can also change the text and photos on your existing pages yourself with the editor.",
      },
      {
        q: "Do you do local SEO for electricians?",
        a: "Yes. It's $799 a month with a 3 month minimum. We agree on the targets in writing before I start, and if they aren't met after 3 months, you get all $2,397 back. After that it's $399 a month.",
      },
    ],
  },
  {
    slug: "pest-control",
    label: "Pest Control Companies",
    linkText: "Web design for pest control companies",
    siteHeading: "Pest Control Website",
    siteNoun: "pest control website",
    businessesHeading: "Pest Control Companies",
    title: "Pest Control Website Design | $80 Per Page | PeakRanking",
    description:
      "Pest control websites custom coded at $80 per designed page, with a page for each pest you treat. Free homepage mockup within 3 business days.",
    h1: "Website Design for Pest Control Companies",
    subtitle: "Custom Coded Pest Control Websites At $80 Per Page",
    intro:
      "When people need pest control, they usually search for the pest: ants in the kitchen, termites in the crawl space, mosquitoes in the backyard, mice in the attic. I design pest control websites with a page for each pest you treat, so the person who types their problem into Google finds a page about exactly that problem.",
    sections: [
      {
        heading: "People Search By The Pest, So Each Pest Gets A Page",
        body: [
          "A homeowner who found termite damage searches for termite treatment in their town. Someone who hears scratching in the walls searches for rodent removal. A single services page that lists twelve pests rarely ranks for any of them.",
          "A short page per pest covers the signs, how you treat it and whether it takes one visit or an ongoing plan. That's what people read before they pick a company.",
        ],
      },
      {
        heading: "Recurring Pest Control Plans Need A Clear Page",
        body: [
          "Recurring service plans are where most pest control companies earn their steady income. A plan page that says how often you come, what each visit covers and what happens if pests come back between visits makes it easy for a one-time customer to sign up.",
          "If you have set prices or a starting price, put them on that page. People comparing plans look for a number first.",
        ],
      },
      {
        heading: "Answers About Kids, Pets And Treatments",
        body: [
          "Parents and pet owners want to know what you apply and whether they need to keep the kids or the dog away for a while. A plain answer on the site, in your own words and in line with the product labels you follow, saves you answering the same question on every quote request.",
        ],
      },
    ],
    pagesHeading: "Pages A Pest Control Website Needs",
    pagesIntro:
      "This is the plan I'd start with for a small residential pest control company. Swap any pest page for the ones that bring in most of your work in your area.",
    pages: [
      {
        name: "Home",
        why: "The pests you treat, your recurring plans and a quote button, all visible on a phone without much scrolling.",
      },
      {
        name: "Pest control plans",
        why: "How often you come, what each visit covers, what happens between visits and the price if you list one.",
      },
      {
        name: "Termite control",
        why: "Signs of termites, inspections, treatment options and any warranty or bond you offer.",
      },
      {
        name: "Mosquito control",
        why: "Seasonal yard treatments, how often you treat and when the season starts.",
      },
      {
        name: "Rodent control",
        why: "Mice and rats, sealing entry points and how you handle removal.",
      },
      {
        name: "Service area",
        why: "The towns and counties you cover.",
      },
      {
        name: "About and contact",
        why: "Your license details, who does the treatments and a quote request form.",
      },
    ],
    homepageHeading: "What A Pest Control Homepage Has To Show",
    homepage: [
      "The pests you treat, each one linking to its own page",
      "Your recurring plans and how often you come",
      "A quote request button near the top",
      "Your state pest control license number",
      "A short answer on kids and pets",
      "The towns you cover",
    ],
    faq: [
      {
        q: "How much does a pest control website cost?",
        a: "$80 per designed page. A 5 page site is $400 and the 7 page plan on this page is $560, paid half up front and half at launch.",
      },
      {
        q: "Do I need a separate page for every pest?",
        a: "No. Start with the pests that bring in most of your work, such as termites, mosquitoes and rodents. Add others later at $80 a page as you see what people ask about.",
      },
      {
        q: "Can customers sign up for a service plan on the site?",
        a: "They can send a request through a form on the plan page, and it goes to your email. If your scheduling or billing software has its own signup page, I can add a button that opens it.",
      },
      {
        q: "Can I change my plan prices myself?",
        a: "Yes. The editor lets you change prices, text and photos without touching any code.",
      },
    ],
  },
  {
    slug: "cleaning-companies",
    label: "House Cleaning Companies",
    linkText: "Web design for house cleaning companies",
    siteHeading: "Cleaning Company Website",
    siteNoun: "cleaning company website",
    businessesHeading: "House Cleaning Companies",
    title: "Cleaning Company Website Design | $80 Per Page | PeakRanking",
    description:
      "Websites for house cleaning companies, custom coded at $80 per designed page. A 5 page site is $400. Free homepage mockup within 3 business days.",
    h1: "Website Design for House Cleaning Companies",
    subtitle: "Custom Coded Cleaning Company Websites At $80 Per Page",
    intro:
      "Hiring a house cleaner means letting someone into your home, often while you're out. That's why people shopping for cleaning read more carefully than the price of the job suggests. They want to know who will come, what gets cleaned and how to book. I design cleaning company websites that answer those three things clearly, with a quote request on every page.",
    sections: [
      {
        heading: "Trust Comes Before Price For Most Cleaning Customers",
        body: [
          "Before they compare prices, most people want to know whether your cleaners are employees, whether they're background checked, whether you're insured and bonded and whether the same person comes each time. If those things are true for your business, they belong on the homepage and the about page in plain words.",
          "Real photos of your team help more here than in almost any other trade. A stock photo of a smiling cleaner in a spotless kitchen tells the visitor nothing about you.",
        ],
      },
      {
        heading: "Recurring, Deep And Move-Out Cleaning Are Different Searches",
        body: [
          "Someone looking for weekly or biweekly cleaning compares schedules and price. Someone who needs a deep clean before guests arrive, or a move-out clean before handing back the keys, needs it once and often soon. Each of those is searched by name, so each gets its own page.",
          "A checklist of what each type of clean includes helps too. It cuts down the back and forth over quotes and gives the visitor something concrete to compare.",
        ],
      },
      {
        heading: "Showing Prices On A Cleaning Website",
        body: [
          "People shopping for cleaning look for a price. If you price by bedrooms and bathrooms or by square footage, a starting price or a short pricing table answers the question before they ask it. If every home gets its own quote, say what the price depends on and how fast you reply.",
        ],
      },
    ],
    pagesHeading: "Pages A Cleaning Company Website Needs",
    pagesIntro:
      "This is the plan I'd start with for a residential cleaning company. If you also clean offices, that becomes a page of its own.",
    pages: [
      {
        name: "Home",
        why: "The types of cleaning you offer, why people can trust your team and a quote button near the top.",
      },
      {
        name: "Recurring house cleaning",
        why: "Weekly, biweekly and monthly visits, what each visit covers and how scheduling works.",
      },
      {
        name: "Deep cleaning",
        why: "What a deep clean adds over a regular visit, with the checklist.",
      },
      {
        name: "Move-in and move-out cleaning",
        why: "For renters, landlords and people selling a house, and how soon you can come.",
      },
      {
        name: "Service area",
        why: "The towns and neighborhoods you cover.",
      },
      {
        name: "About and quote request",
        why: "Who owns the company, who does the cleaning, your insurance and a quote form that asks for the home size.",
      },
    ],
    homepageHeading: "What A Cleaning Company Homepage Has To Show",
    homepage: [
      "The types of cleaning you offer: recurring, deep cleaning, move-in and move-out",
      "Whether your team is insured, bonded and background checked, where that's true",
      "Real photos of your team",
      "A starting price, or what a quote depends on",
      "A quote request button near the top",
      "The towns and neighborhoods you cover",
    ],
    faq: [
      {
        q: "How much does a cleaning company website cost?",
        a: "It's $80 per designed page. A 5 page site is $400, and the 6 page plan on this page is $480. You pay half to start and half at launch.",
      },
      {
        q: "Can customers book a cleaning online?",
        a: "They can request one through a form that goes to your email. If you already use booking software with its own booking page, I can add a button that opens it.",
      },
      {
        q: "Should I put my prices on the website?",
        a: "If you have set prices or a starting price, yes. People shopping for cleaning look for a number first. If every quote is different, list what the price depends on instead.",
      },
      {
        q: "Can I change my prices and checklists myself?",
        a: "Yes. The editor lets you change text, prices and photos without touching any code.",
      },
      {
        q: "Do you do local SEO for cleaning companies?",
        a: "Yes, for $799 a month with a 3 month minimum. The targets go in writing before I start, and if they aren't met after 3 months, I refund all $2,397. After that it's $399 a month.",
      },
    ],
  },
  {
    slug: "tree-service",
    label: "Tree Service Companies",
    linkText: "Web design for tree service companies",
    siteHeading: "Tree Service Website",
    siteNoun: "tree service website",
    businessesHeading: "Tree Service Companies",
    title: "Tree Service Website Design | $80 Per Page | PeakRanking",
    description:
      "Custom coded websites for tree service companies and arborists at $80 per designed page. Request a free homepage mockup within 3 business days.",
    h1: "Website Design for Tree Service Companies and Arborists",
    subtitle: "Custom Coded Tree Service Websites At $80 Per Page",
    intro:
      "Tree work is expensive, it happens close to the house and mistakes are costly. Homeowners know that, so before they let a crew near a big oak, they check whether the company is insured, whether there's a certified arborist on staff and what finished jobs look like. I design tree service websites that put that proof where people look for it.",
    sections: [
      {
        heading: "Proof Of Insurance And Arborist Credentials Up Front",
        body: [
          "A falling limb can damage a roof, a fence or a neighbor's car, and homeowners know it. Many ask for proof of liability insurance before they agree to a job. If you carry it, say so on the homepage and offer the certificate on request.",
          "If you or someone on your crew is an ISA Certified Arborist, name them and show the credential. It tells a homeowner that someone on the job has studied tree care, and many people look for it.",
        ],
      },
      {
        heading: "Storm And Emergency Tree Removal Needs Its Own Page",
        body: [
          "After a storm, people search for emergency tree removal, usually on a phone and often with a tree on the house or across the driveway. A short page that says you take emergency jobs, which towns you cover and how to reach you fast is the one that gets used.",
          "If you help homeowners with insurance claims for storm damage, say what you document and what the homeowner handles. It's one of the first questions people have after a storm.",
        ],
      },
      {
        heading: "Removal, Trimming And Stump Grinding Are Separate Searches",
        body: [
          "Someone with a dead pine next to the house searches for tree removal. Someone with branches over the roof searches for tree trimming. Someone left with a stump searches for stump grinding. A page for each gives Google a clear match and lets you show photos of that kind of job.",
        ],
      },
    ],
    pagesHeading: "Pages A Tree Service Website Needs",
    pagesIntro:
      "This is the plan I'd start with for a residential tree service. If you also do land clearing or crane work, each can be its own page later.",
    pages: [
      {
        name: "Home",
        why: "Photos of your crew on real jobs, your insurance and an estimate request button near the top.",
      },
      {
        name: "Tree removal",
        why: "Dead, leaning and hazardous trees, and how you take them down near houses and power lines.",
      },
      {
        name: "Tree trimming and pruning",
        why: "Branches over roofs and driveways, crown thinning and clearance work.",
      },
      {
        name: "Stump grinding",
        why: "Grinding, cleanup and what's left in the yard afterward.",
      },
      {
        name: "Emergency storm tree removal",
        why: "Fallen trees and limbs after storms, and how to reach you fast.",
      },
      {
        name: "Service area",
        why: "The towns and counties you cover.",
      },
      {
        name: "About and contact",
        why: "Your insurance, any ISA certification on the crew, your equipment and a quote request form.",
      },
    ],
    homepageHeading: "What A Tree Service Homepage Has To Show",
    homepage: [
      "Photos of your crew and equipment on real jobs",
      "Your liability insurance, and ISA certification if you have it",
      "Removal, trimming and stump grinding as separate services",
      "Whether you take emergency storm jobs",
      "An estimate request button near the top",
      "The towns you cover",
    ],
    faq: [
      {
        q: "How much does a tree service website cost?",
        a: "$80 per designed page. A 5 page site is $400 and the 7 page plan on this page comes to $560, half up front and half at launch.",
      },
      {
        q: "Should I show photos of big removals?",
        a: "Yes. Photos of large trees coming down near houses show what your crew can handle. Phone photos are fine. I resize and compress them so the pages still load fast.",
      },
      {
        q: "Can I add a page for land clearing later?",
        a: "Yes. Each new page is $80. Add it when it's work you want more of.",
      },
      {
        q: "Do you do local SEO for tree service companies?",
        a: "Yes. Local SEO is $799 a month with a 3 month minimum. We agree on the targets in writing first, and if they aren't met after 3 months, you get all $2,397 back.",
      },
    ],
  },
  {
    slug: "painters",
    label: "Painters",
    linkText: "Web design for painters",
    siteHeading: "Painting Website",
    siteNoun: "painting website",
    businessesHeading: "Painting Contractors",
    title: "Painting Contractor Website Design | PeakRanking",
    description:
      "Websites for painting contractors, custom coded at $80 per designed page, with galleries that load fast. Free homepage mockup within 3 business days.",
    h1: "Website Design for Painting Contractors",
    subtitle: "Custom Coded Painting Websites At $80 Per Page",
    intro:
      "Homeowners can judge a paint job better than most trade work. They notice a straight cut line, a clean ceiling and trim with no drips, and they know a bad job is hard to hide. I design painting contractor websites that let photos of your finished rooms and houses make the case, with a way to ask for an estimate on every page.",
    sections: [
      {
        heading: "Interior, Exterior And Cabinet Painting Reach Different Customers",
        body: [
          "A homeowner repainting a living room, one planning a full exterior and one pricing kitchen cabinet painting search with different words and ask different questions. Interior customers want to know about furniture, prep and how long the house is disrupted. Exterior customers ask about washing, wood repair and the weather. Cabinet customers want to see finished kitchens.",
          "A page for each lets you answer those questions in order, and it gives Google a page that matches each search.",
        ],
      },
      {
        heading: "Project Photos Of Finished Rooms And Houses",
        body: [
          "Before and after photos of the same room or the same wall sell painting better than a list of services. A good gallery is grouped by type of job, so a visitor planning an exterior repaint sees exteriors first.",
          "I resize every photo for the screen it's shown on and load gallery images as the visitor scrolls, so the gallery stays fast on a phone.",
        ],
      },
      {
        heading: "What Homeowners Ask Before They Hire A Painter",
        body: [
          "Most people ask the same things: which paint brands you use, how you protect floors and furniture, who does the work, what your warranty covers and whether you're insured. Answering them on the site saves time on every estimate.",
          "Owners of older homes may also ask about lead paint. Firms that disturb painted surfaces in homes built before 1978 need EPA Lead-Safe certification, so if you have it, show it.",
        ],
      },
    ],
    pagesHeading: "Pages A Painting Website Needs",
    pagesIntro:
      "This is the plan I'd start with for a residential painting contractor. If you paint offices, storefronts or apartment buildings, commercial painting becomes a page of its own.",
    pages: [
      {
        name: "Home",
        why: "Photos of your best finished jobs, the kinds of painting you do and an estimate request button near the top.",
      },
      {
        name: "Interior painting",
        why: "Walls, ceilings and trim, how you prep and protect the house and how long a typical job takes.",
      },
      {
        name: "Exterior painting",
        why: "Siding, trim and doors, washing and wood repair before painting and how weather affects the schedule.",
      },
      {
        name: "Cabinet painting",
        why: "Kitchen and bathroom cabinets, the finish you use and how long the kitchen is out of use.",
      },
      {
        name: "Project gallery",
        why: "Before and after photos grouped by interior, exterior and cabinets.",
      },
      {
        name: "Service area",
        why: "The towns and neighborhoods you cover.",
      },
      {
        name: "About and contact",
        why: "Who does the work, your insurance, your warranty and an estimate request form.",
      },
    ],
    homepageHeading: "What A Painting Contractor Homepage Has To Show",
    homepage: [
      "Photos of rooms and houses you've painted",
      "Interior, exterior and cabinet painting as separate choices",
      "The paint brands you use",
      "Your warranty in plain words",
      "Your insurance, and EPA Lead-Safe certification if you have it",
      "An estimate request button near the top",
    ],
    faq: [
      {
        q: "How much does a painting contractor website cost?",
        a: "$80 per designed page. A 5 page site is $400 and the 7 page plan on this page is $560. Half is paid to start and half at launch.",
      },
      {
        q: "Can I add commercial painting as its own page?",
        a: "Yes, for $80. If you paint offices, storefronts or apartment buildings, it's worth its own page, because property managers search for commercial painters separately.",
      },
      {
        q: "Can I add finished jobs to the gallery myself?",
        a: "Yes. The editor lets you add photos and short project notes after launch.",
      },
      {
        q: "Do you do local SEO for painting contractors?",
        a: "Yes. It's $799 a month with a 3 month minimum, with the targets agreed in writing first. If they aren't met after 3 months, you get the full $2,397 back. After that it's $399 a month.",
      },
    ],
  },
];
