import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        default: "#333333",
      },
      backgroundColor: {
        "btn-color": "#0073cf",
        "banner-color": "#E9F5FE",
        "black-light": "#010037",
      },
    },
  },
  plugins: [],
};
export default config;
