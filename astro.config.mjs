import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://peakranking.co",
  build: {
    // Inline CSS into <style> so there are no render-blocking .css requests (big win on Slow 4G).
    inlineStylesheets: "always",
  },
});
