module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media", // or false or 'class'
  theme: {
    extend: {
      backdropBlur: {
        px: "1px",
        xs: "2px",
      },
      colors: {
        "theme-light": "#fdfdfd",
        "theme-dark": "#151c2a",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
