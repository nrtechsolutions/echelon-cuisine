import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'gradient-orange': 'linear-gradient(to right, #f79c42, #f8a488)',
        "gradient-lime-blue": "linear-gradient(to right, #84cc16, #1e3a8a)", 
      },
      colors: {
        gold: '#E5B74D',  // Adding custom gold color here
      },
    },
  },
  plugins: [],
};

export default config;
