module.exports = {
  content: ["./index.html", "./src/**/*.vue"],
  theme: {
    extend: {
      colors: {
        green_ifc: "#29531D",
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
};
