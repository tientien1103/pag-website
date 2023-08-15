import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
      transitionProperty: {
        height: "height",
        width: "width",
      },
    },
  },
  plugins: [],
}
export default config
