// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        app: "#0F172A",
        cinema: "#10141B",
      },
      backgroundImage: {
        "app-gradient":
          "linear-gradient(135deg, #10141B 0%, #1A1F2B 50%, #000000 100%)",
      },
    },
  },
  plugins: [],
};
