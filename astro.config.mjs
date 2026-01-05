import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify";
import react from "@astrojs/react";
import favicons from "astro-favicons";
import { defineConfig, envField } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://tranvlnh.id.vn",
  base: "/",
  integrations: [
    react(),
    mdx(),
    favicons({
      masterPicture: "public/favicon.png",
      input: ["public/favicon.png"],
      output: {
        assetsPrefix: "/",
      },
    }),
  ],
});
