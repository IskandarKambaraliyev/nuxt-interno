/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  future: { hoverOnlyWhenSupported: true },
  theme: {
    extend: {
      colors: {
        brown: "#CDA274",
        dark: "#292F36",
        light: "#F4F0EC",
        "brown-500": "#F4F0EC",
        "dark-500": "#4D5053",
      },
      screens: {
        lg: "1232px",
        md: "768px",
        sm: "640px",
      },
    },
  },
  plugins: [],
};
