// @ts-check
import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify";
import react from "@astrojs/react";
import { defineConfig, envField } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://tranvlnh26.github.io/",
  base: "/portfolio",
  integrations: [react(), mdx()],
  adapter: netlify(),
  env: {
    schema: {
      CLIENT_ID: envField.string({ context: "server", access: "secret" }),
      CLIENT_SECRET: envField.string({ context: "server", access: "secret" }),
      REFRESH_TOKEN: envField.string({ context: "server", access: "secret" }),
    },
  },
});
