import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { markdownImagePlugin } from "@vuepress/plugin-markdown-image";

export default defineUserConfig({
  base: "/learning-ai/",
  port: 3000,

  head: [
    ["link", { rel: "icon", href: "/learning-ai/favicon.ico" }],
    ["link", { rel: "manifest", href: "/learning-ai/manifest.webmanifest" }],
    ["meta", { name: "theme-color", content: "#00A67E" }],
  ],

  theme: defaultTheme({
    logo: "logo_worldline.png",
    repo: "https://github.com/worldline/learning-ai",
    repoLabel: "⭐ Contribute!",

    sidebar: [
      { text: "Home", link: "/" },
      "/1.intro/",
      "/2.prompt/",
      "/3.client/",
      "/4.assistant/",
      "/5.services/",
      "/6.mcp/",
      "/7.node/",
      "/8.cloud/",
    ],
  }),

  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
  plugins: [
    markdownImagePlugin({
      figure: true,
      lazyload: true,
      mark: true,
      size: true,
    }),
  ],
});
