const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: "#3D88B8"
      }
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },

  },
  plugins: [],
});