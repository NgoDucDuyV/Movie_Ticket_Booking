// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        app: {
          DEFAULT: "#0F172A",
          dark: "#020617",
        },

        cinema: {
          DEFAULT: "#10141B",
          soft: "#1A1F2B",
        },

        brand: {
          DEFAULT: "#623294",
          light: "#7A3DB6",
          dark: "#4A236F",
        },

        form: {
          DEFAULT: "#3760C2",
          hover: "#2F52A6",
          focus: "#27458B",
        },

        highlight: {
          DEFAULT: "#F3EA28",
          soft: "#FFF176",
          dark: "#C9C01E",
        },
      },
    },
  },
  plugins: [],
};
