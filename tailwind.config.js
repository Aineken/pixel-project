/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "/public/index.html"],
  darkMode: false,
  theme: {
    extend: {},
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  variant: {
    extend: {},
  },
  plugins: [],
};
