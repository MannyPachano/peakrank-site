/**
 * One question and answer, rendered by src/components/PageFaq.astro both as
 * visible text and as FAQPage JSON-LD. Plain text only, no HTML: the same
 * string goes into the structured data.
 */
export interface FaqItem {
  q: string;
  a: string;
}
