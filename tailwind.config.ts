import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "uf-background": "#05061f",
        "uf-background-2": "#0D1331",
        "uf-background-3": "#1e2442",
        "uf-primary": "#FF8706",
        "uf-secondary": "#1f308d",
        "uf-secondary-2": "#3F4D9B",
        "uf-secondary-3": "#657FFF",
        "uf-accent": "#FF784B",
        "uf-accent-2": "#FFA106"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
