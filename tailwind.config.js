/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "/public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        "dark-blue": {
          500: "#212526",
        },
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "914px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  variant: {
    extend: {},
  },
  plugins: [],
};
