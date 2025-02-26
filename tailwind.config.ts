import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary_white: "#fffdf7",
        secondary_white: "#fff",
        secondary_green: "#09543d",
      },
      colors: {
        primary_white: "#fffdf7",
        secondary_white: "#fff",
        primary_green: "#09543d",
        primary_pink: "#FFA9E9",
        primary_violet: "#6d0596",
        secondary_violet: "#461e10",
      },
    },
  },
  plugins: [],
} satisfies Config;
