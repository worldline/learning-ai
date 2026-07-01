import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { pwaPlugin } from "@vuepress/plugin-pwa";
import { searchPlugin } from "@vuepress/plugin-search";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({

  base: "/learning-ai/",
  port: 3000,

  head: [
    ["link", { rel: "icon", href: "/learning-ai/favicon.ico" }],
    ["link", { rel: "manifest", href: "/learning-ai/manifest.webmanifest" }],
    ["meta", { name: "theme-color", content: "#00A67E" }],
  ],

  theme: defaultTheme({
    hostname: "https://worldline.github.io/learning-ai",
    logo: "logo_worldline.png",
    repo: "https://github.com/worldline/learning-ai/activity",
    repoLabel: "⭐ See changelogs & contribute",

    sidebar: [
      { text: "Home", link: "/" },
      {
        text: "Mastering LLMs throughout the SDLC",
        children: [
          "/1.intro/",
          "/2.prompt/",
          "/3.client/",
          "/4.assistant/",
          "/agentic-cli",
        ],
      },
      {
        text: "Building Intelligent Applications",
        children: [
          "/5.services/",
          "/6.agentic/",
          "/7.node/",
          "/8.cloud/",
        ],
      },
    ],
  }),

  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),

  plugins: [
    searchPlugin({
      locales: {
        "/": {
          placeholder: "Search...",
        },
      },
    }),
    pwaPlugin({
      update: "hint",
      cacheHTML: true,
      manifest: {
        icons: [
          {
            src: "/learning-ai/logo.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/learning-ai/logo.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
    mdEnhancePlugin({
      kotlinPlayground: true,
    }),
  ],
});
