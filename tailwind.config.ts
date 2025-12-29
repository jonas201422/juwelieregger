import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0b0b0f",
        ivory: "#f5f1e8",
        gold: "#d6b56e",
        graphite: "#1a1b22",
        haze: "rgba(255,255,255,0.08)"
      },
      fontFamily: {
        serif: ["var(--font-playfair)"],
        sans: ["var(--font-inter)"]
      },
      boxShadow: {
        glow: "0 10px 40px rgba(0,0,0,0.35)"
      },
      backgroundImage: {
        grain: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.04), transparent 25%), radial-gradient(circle at 80% 0%, rgba(214,181,110,0.15), transparent 35%), linear-gradient(120deg, rgba(255,255,255,0.05), rgba(214,181,110,0.18))"
      }
    }
  },
  plugins: [],
};

export default config;
