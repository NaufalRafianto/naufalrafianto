/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",

  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBG: "#F7F0E1",
        darkBG: "#7D93D0",
        textDark: "#F7F0E1",
        lightText: "#323232",
      },

      fontFamily: {
        serif: "Montserrat",
      },
      fontSize: {
        base: "1.5rem",
      },
    },
  },
  plugins: [require("@kamona/tailwindcss-perspective")],
};
