import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        general: {
          primary: "#1677ff",

          "primary-content": "#000516",

          secondary: "#0034ff",

          "secondary-content": "#cadeff",

          accent: "#00beff",

          "accent-content": "#000d16",

          neutral: "#1f1919",

          "neutral-content": "#cdcbcb",

          "base-100": "#1c1917",

          "base-200": "#171412",

          "base-300": "#12100e",

          "base-content": "#d2d2d2",

          info: "#00c3ff",

          "info-content": "#000e16",

          success: "#7ced68",

          "success-content": "#051404",

          warning: "#cc5e00",

          "warning-content": "#0f0300",

          error: "#ff6da0",

          "error-content": "#160409",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
export default config;
