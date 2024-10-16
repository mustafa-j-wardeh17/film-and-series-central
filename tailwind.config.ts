import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xs': '510px'
      },
      boxShadow: {
        "smallRed": '0 3px 10px red',
        "red": '0 0 10px red',
        "red2": '0 0 30px red',
        "white": '0 0 10px white',
        "pagination": "0.1em 0.1em 0.6em 0.2em #de080874",
        "footerLogo": "0 3px 5px rgba(255, 255, 255, 0.186)",
        "genreShadow": "0 8px 16px rgba(255, 255, 255, 0.2)"
      },
      transitionTimingFunction: {
        'custom-ease': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
