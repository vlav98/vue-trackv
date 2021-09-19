module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#eb6345",
      primaryDull: "#fef7f5",
      dark: "#d1583d",
      darker: "#b84d35",
      text: "#333",
      white: "#FFFFFF",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
