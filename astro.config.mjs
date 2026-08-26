import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://peakrankingseo.com",
  trailingSlash: "never",
  build: {
    // Inline CSS into <style> so there are no render-blocking .css requests (big win on Slow 4G).
    inlineStylesheets: "always",
    // Emit dist/about.html rather than dist/about/index.html. With the default
    // "directory" format Netlify serves /about/ and 301s /about, which is the exact
    // URL every canonical tag and every sitemap entry points at. "file" makes the
    // canonical URL the one that returns 200.
    format: "file",
  },
  integrations: [
    sitemap({
      filter: (page) => {
        try {
          const path =
            new URL(page).pathname.replace(/\/$/, "") || "/";
          return path !== "/thanks" && path !== "/terms";
        } catch {
          return true;
        }
      },
    }),
  ],
});
