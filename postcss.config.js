module.exports = {
  plugins: {
    tailwindcss: {
      content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./index.html",
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
    },
    autoprefixer: {},
  },
};
