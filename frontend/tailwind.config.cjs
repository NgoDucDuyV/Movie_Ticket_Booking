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
      colors: {
        /* =========================
           BRAND COLORS
        ========================= */

        primary: {
          50: "#ffe5e5",
          100: "#ffb8b8",
          200: "#ff8a8a",
          300: "#ff5c5c",
          400: "#ff2e2e",
          500: "#e61919", // MAIN RED
          600: "#c91414",
          700: "#a30f0f",
          800: "#7d0b0b",
          900: "#570707",
        },

        gold: {
          50: "#fff8e1",
          100: "#ffecb3",
          200: "#ffe082",
          300: "#ffd54f",
          400: "#ffca28",
          500: "#f4c430", // MAIN GOLD
          600: "#e0b020",
          700: "#c79a12",
          800: "#a67c00",
          900: "#7a5a00",
        },

        /* =========================
           BACKGROUND
        ========================= */

        background: {
          dark: "#181111", // main page
          soft: "#221818", // card
          lighter: "#2a1f1f", // hover
          light: "#f8f6f6",
        },

        /* =========================
           TEXT
        ========================= */

        text: {
          primary: "#ffffff",
          secondary: "#b3b3b3",
          muted: "#6b6b6b",
        },

        /* =========================
           STATE
        ========================= */

        success: "#22c55e",
        warning: "#f59e0b",
        error: "#ef4444",
        info: "#3b82f6",
      },

      fontFamily: {
        display: ["Be Vietnam Pro", "sans-serif"],
      },

      borderRadius: {
        DEFAULT: "1rem",
        lg: "2rem",
        xl: "3rem",
        full: "9999px",
      },
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
