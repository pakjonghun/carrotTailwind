module.exports = {
  content: ["./pages/**/*.tsx", "./components/pages/**/*.tsx"],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/forms")],
};
