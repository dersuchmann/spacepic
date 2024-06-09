import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import reactPlugin from "@vitejs/plugin-react";
import { ecsstatic } from "@acab/ecsstatic/vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://astro.build/config
export default defineConfig({
  // Enable React to support React JSX components.
  integrations: [react()],
  vite: {
    plugins: [reactPlugin(), ecsstatic()],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
