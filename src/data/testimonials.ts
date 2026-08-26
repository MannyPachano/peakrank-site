/**
 * Client testimonials, rendered by src/components/Testimonials.astro
 * on the home page and the about page.
 *
 * To swap in a real named contact once you have sign-off, add a `person`
 * field ("Dana R., Operations Manager"). The card then shows the person on
 * the name line and "Company · work" underneath.
 */
export interface Testimonial {
  /** What the client said. Two or three sentences reads best. */
  quote: string;
  /** Client business name. */
  company: string;
  /** What we built for them. Keep it short and factual. */
  work: string;
  /** Two or three characters for the avatar circle. */
  initials: string;
  /** Optional named contact. Omit until the client approves being named. */
  person?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Our old site hadn’t been touched in years and it showed. Manny rebuilt the whole thing in about two weeks and actually asked good questions about what we do instead of guessing at it. We’re getting quote requests through the site now, which almost never happened before.",
    company: "Universal Environmental Services",
    work: "Website rebuild and local SEO",
    initials: "UE",
  },
  {
    quote:
      "We’re a technology company, so we were skeptical about handing our site to someone else. He hand-coded the whole thing and the PageSpeed numbers came back better than anything we had managed in-house. Hard to argue with that.",
    company: "Hawkeye Technology Inc",
    work: "New website",
    initials: "HT",
  },
  {
    quote:
      "I’ve sent over probably a dozen change requests since we launched and every one of them got done the same day. The last guy we used would sit on it for two weeks and then invoice us for it.",
    company: "Nuvector LLC",
    work: "Website and ongoing edits",
    initials: "NV",
  },
  {
    quote:
      "We sell visual work, so the site had to look good or nobody was going to take us seriously. The design came back better than what we had in our heads, and it loads instantly on a phone.",
    company: "Explainer Visuals",
    work: "Website redesign",
    initials: "EV",
  },
  {
    quote:
      "Almost all of our traffic is on mobile, and the old site was slow enough that people were leaving before it finished loading. The new one is up in under a second and our bounce rate dropped within the first week.",
    company: "Panda’s Playhouse",
    work: "Website rebuild and page speed work",
    initials: "PP",
  },
  {
    quote:
      "Everyone else quoted us five grand and up before anybody had drawn a single thing. We went with the monthly plan instead and the site was live about a week and a half after we signed.",
    company: "LoopManager",
    work: "New website on the monthly plan",
    initials: "LM",
  },
  {
    quote:
      "We were on page three for pretty much everything. About six months in we started showing up in the map results for most of the towns we cover, and we went from two or three calls a week off the website to seven or eight.",
    company: "Ridgeline Roofing Co.",
    work: "Local SEO",
    initials: "RR",
  },
  {
    quote:
      "He explained SEO in plain English instead of throwing a bunch of terms at me that I didn’t know. The last two guys we paid for it never did that.",
    company: "Bellmore Family Dental",
    work: "Website and local SEO",
    initials: "BF",
  },
  {
    quote:
      "Our old site was WordPress and it got hacked twice in one year, which is not a great look when carriers are checking you out. The new one has no database and no login, so that whole class of attack does not apply, and I haven’t had to think about it since.",
    company: "MAP64",
    work: "WordPress migration and hosting",
    initials: "M64",
  },
];
