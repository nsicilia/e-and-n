/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "EN-primary": "#A9D291",
        "EN-secondary": "#4E7D95",
        "EN-ice": "#C8F7FF",
        "EN-darkblue": "#0059AA",
      },
    },
  },
  plugins: [],
};
