/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: ["Atkinson Hyperlegible", "sans-serif"],
      mono: ["Courier Prime", "monospace"],
    },
    extend: {},
  },
  plugins: [],
};
