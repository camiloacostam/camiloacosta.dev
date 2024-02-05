import { defineConfig } from "astro/config";
// Integrations
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
});
