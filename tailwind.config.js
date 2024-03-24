/** @type {import("tailwindcss").Config} */
const defaultTheme = require("tailwindcss/defaultTheme");


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:["Inter", ...defaultTheme.fontFamily.sans]
      },
      colors:{
        main: "#FE6700",
        greene: "#2C6E49",
        sharpgreen: "#31CB00",
        faded: "#F1F7ED",
        lightcream: "#FEFEE3",
        lightorange: "#F7973F",
      }
    },
  },
  plugins: [],
}