// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        display: ["Be Vietnam Pro", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "1rem",
        "2xl": "1.5rem",
        full: "9999px",
      },
      colors: {
        gold: "#D4AF37",
        "background-dark": "#050505",
        "surface-dark": "#121212",
        primary: "#e61919",
        "background-light": "#f8f6f6",
        "surface-dark": "#211111",
        "accent-dark": "#382929",
        /* ===== Base App ===== */
        app: {
          DEFAULT: "#0F172A",
          dark: "#020617",
        },

        cinema: {
          DEFAULT: "#10141B",
          soft: "#1A1F2B",
        },

        /* ===== Brand ===== */
        brand: {
          DEFAULT: "#623294",
          light: "#7A3DB6",
          dark: "#4A236F",
        },

        /* ===== Form / Action ===== */
        form: {
          DEFAULT: "#3760C2",
          hover: "#2F52A6",
          focus: "#27458B",
        },

        /* ===== Highlight ===== */
        highlight: {
          DEFAULT: "#F3EA28",
          soft: "#FFF176",
          dark: "#C9C01E",
        },

        /* ===== White / Text ===== */
        white: {
          DEFAULT: "#FFFFFF",
          soft: "#F8FAFC", // nền card
          muted: "#E5E7EB", // border, divider
          dark: "#CBD5E1", // text phụ
        },
      },
    },
  },
  plugins: [],
};
