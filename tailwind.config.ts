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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        autoslide: "autoslide 15s infinite ",
        fadeleft: "fadeleft 2s linear",
        faderight: "faderight 2s linear",
        fadetop: "fadetop 0.5s linear",
        fadebottom: "fadebottom 0.5s linear",
      },
      keyframes: {
        autoslide: {
          "0%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(0)" },
          "30%": { transform: "translateX(-100%)" },
          "50%": { transform: "translateX(-100%)" },
          "55%": { transform: "translateX(-200%)" },
          "75%": { transform: "translateX(-200%)" },
          "80%": { transform: "translateX(-300%)" },
          "100%": { transform: "translateX(-300%)" },
        },
        fadeleft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "50%": { transform: "translateX(-50%)", opacity: "0.5" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        faderight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "50%": { transform: "translateX(50%)", opacity: "0.5" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        fadetop: {
          "0%": { transform: "translateY(-50%)", opacity: "0" },
          "50%": { transform: "translateY(-20%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadebottom: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "50%": { transform: "translateY(50%)", opacity: "0.5" },
          "100%": { transform: "translateY(-100%)", opacity: "1" },
        },
        spin: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "50%": { transform: "translateY(50%)", opacity: "0.5" },
          "100%": { transform: "translateY(-100%)", opacity: "1" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
