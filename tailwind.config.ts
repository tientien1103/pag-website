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
        primary: "#E0144C",
        secondary: "#1f2937",
        thirdly: "#7A7A7A",
        accent: "#a99fc5",
        blueText: "#4154f1",
        grey: "#595959",
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
      boxShadow: {
        "3xl": "8px 16px 15px 5px #949ab2",
        "4xl": "0px 0px 12px 0px rgba(0, 0, 0, 0.10)",
      },
    },
  },
  plugins: [],
};
export default config;
