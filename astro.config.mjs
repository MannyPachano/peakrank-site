import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://peakrankingseo.com",
  trailingSlash: "never",
  build: {
    // Inline CSS into <style> so there are no render-blocking .css requests (big win on Slow 4G).
    inlineStylesheets: "always",
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
