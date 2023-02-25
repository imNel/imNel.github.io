/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Plus Jakarta Sans", "sans-serif"],
      serif: ["Zodiak", "serif"],
      mono: ["JetBrains Mono", "monospace"],
    },
    colors: {
      transparent: "transparent",
      ivory: "#f2f5ea",
      gunmetal: "#151618",
    },
    extend: {},
    plugins: [],
  },
};
