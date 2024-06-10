import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

import { ecsstatic } from "@acab/ecsstatic/vite";

import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:4321/",
  // Enable React to support React JSX components.
  integrations: [react(), mdx(), tailwind()],
  vite: {
    plugins: [ecsstatic()],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
