import("tailwindcss").Config;

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**.js",
    "./components/**.js",
    "./components/**/**.js",
    "./node_modules/flowbite-react/**/*.js",
    "./node_modules/flowbite/**/*.js",
    "./public/**/*.html",
  ],
  theme: {
    fontFamily: {
      sans: "Exo 2",
      serif: "Fraunces",
      mono: "Azeret Mono",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
