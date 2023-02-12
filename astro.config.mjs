import { defineConfig } from "astro/config";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://www.matranga.dev",
  integrations: [compress(), sitemap(), prefetch(), robotsTxt(), tailwind()]
});