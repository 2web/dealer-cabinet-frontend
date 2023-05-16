import { defineConfig } from "vite";
import postcss from "./postcss.config.js";
import react from "@vitejs/plugin-react";
import { copy } from 'copy-vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env": process.env,
  },
  css: {
    postcss,
  },
  base: "/dealer-cabinet-frontend",
  plugins: [
    react({
      include: "**/*.tsx",
    }),
    copy({
      pattern: [
        { from: "src/assets/images/", to: "assets/images" },
        { from: "src/komm/", to: "assets/komm" },
        { from: "src/favicon.png", to: "/favicon.png" }
      ],
    })
  ],
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
