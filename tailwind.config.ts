import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkblue: "#21263F",
        main: "#BDBDBD",
        highlight: "white",
        transparentGrey: "rgba(85, 83, 83, 0.14)",
        green: "#3BE4BF",
        transparentGreen: "rgba(59, 228, 191, 0.1)",
      },
      fontSize: {
        title: "40px",
        subtitle: "20px",
      },
    },
  },
  plugins: [],
} satisfies Config;
