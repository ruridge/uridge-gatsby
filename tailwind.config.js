module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
  plugins: [],
};
