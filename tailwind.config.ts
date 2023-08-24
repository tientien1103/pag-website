import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        scroll: "scroll 25s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-230px * 8))" },
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "16px",
        },
      },
      colors: {
        primary: "#051441",
        secondary: "#6A7C92",
        thirdly: "#7A7A7A",
        accent: "#a99fc5",
      },
      fontFamily: {
        sans: ["Barlow", "sans-serif"],
      },
      fontSize: {
        40: "40px",
      },
      transitionProperty: {
        height: "height",
        width: "width",
      },
    },
  },
  plugins: [],
};
export default config;
