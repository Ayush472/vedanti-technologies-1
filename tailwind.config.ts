import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    colors:{
      primary:'#038CF7F',
      secondary:'#F2C641',
      tertiary:{
        dark:"#F27405",
        light:"#F2C641",

      }
    }
    },
  },
  plugins: [],
};
export default config;
