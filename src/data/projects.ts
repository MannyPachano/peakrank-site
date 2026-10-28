/**
 * Real projects, rendered by src/components/RecentWork.astro.
 * Each entry links to its case study on the portfolio site. The `role` line
 * says plainly whether it was client work or built in-house as an employee.
 */
export interface Project {
  name: string;
  role: string;
  summary: string;
  caseStudy: string;
  live?: string;
  /**
   * File name inside src/assets/work/. RecentWork.astro resolves it to the
   * imported asset, so a typo here fails the build rather than rendering a
   * broken image.
   */
  image?: string;
  /**
   * The two in-house projects are represented by line drawings rather than
   * screenshots, so they need their own alt text and a light backdrop.
   */
  imageIsDrawing?: boolean;
}

const portfolio = "https://websitesbymanny.netlify.app";

export const projects: Project[] = [
  {
    name: "Universal Environmental Services",
    image: "ues-thumbnail.webp",
    role: "Client project, 2026 to present",
    summary:
      "Designed and rebuilt the website of a used oil collection company that operates in 28 states, including a locations page for 53 facilities and 28 state pages, and run its SEO program.",
    caseStudy: `${portfolio}/web-developer-project-ues`,
    live: "https://universalenvironmentalservices.com",
  },
  {
    name: "TimeClick",
    image: "timeclick-thumbnail.webp",
    role: "In-house role, 2024 to present",
    summary:
      "Redesigned the marketing website for a time clock software company and ran the SEO program that took organic traffic from about 4,000 to over 30,000 visits a month.",
    caseStudy: `${portfolio}/web-developer-project-timeclick`,
    live: "https://timeclick.com",
  },
  {
    name: "LoopManager",
    image: "loopmanager-thumbnail.svg",
    imageIsDrawing: true,
    role: "In-house role, 2024",
    summary:
      "Moved the product website from WordPress to Astro and built a custom blog editor so the marketing team could publish posts without a developer.",
    caseStudy: `${portfolio}/web-developer-project-loopmanager`,
  },
  {
    name: "nuVector",
    image: "nuvector-thumbnail.webp",
    role: "In-house role, 2024 to 2025",
    summary:
      "Redesigned and rebuilt the company website on Astro: nine client pages, three service pages and a blog of 20 posts, each leading to the demo request.",
    caseStudy: `${portfolio}/web-developer-project-nuvector`,
  },
  {
    name: "Jonathan Zalzman Guitar",
    image: "jonathan-zalzman-thumbnail.webp",
    role: "Client project, 2026",
    summary:
      "Designed and built a website for a guitar teacher in Suwanee, GA, with his pricing, student reviews and a form to book a free trial lesson.",
    caseStudy: `${portfolio}/web-developer-project-jonathan-zalzman`,
    live: "https://jonathanzalzmanguitar.netlify.app",
  },
  {
    name: "Explainer Visuals",
    image: "explainer-visuals-thumbnail.svg",
    imageIsDrawing: true,
    role: "Client project, 2024",
    summary:
      "Built a portfolio website for a video production studio where every video plays automatically and streams in small pieces, so the page stays fast.",
    caseStudy: `${portfolio}/web-developer-project-explainer-visuals`,
  },
];
