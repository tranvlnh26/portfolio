// @ts-check
import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify";
import react from "@astrojs/react";
import favicons from "astro-favicons";
import { defineConfig, envField } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    mdx(),
    favicons({
      input: ["public/favicon.svg", "public/favicon.png"],
      name: "tranvlnh",
      icons: {
        favicons: true,
        android: true,
        appleIcon: true,
        appleStartup: true,
        windows: true,
        yandex: true,
      },
      pixel_art: true,
      manifestMaskable: false,
      output: {
        images: true,
        files: true,
        html: true,
        assetsPrefix: "/portfolio/",
      },
    }),
  ],
  adapter: netlify(),
  env: {
    schema: {
      CLIENT_ID: envField.string({ context: "server", access: "secret" }),
      CLIENT_SECRET: envField.string({ context: "server", access: "secret" }),
      REFRESH_TOKEN: envField.string({ context: "server", access: "secret" }),
    },
  },
});
