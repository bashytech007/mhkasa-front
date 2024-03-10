/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      monteserrat: ["Monteserrat", "sans-serif"],
      fuzzy: ["Fuzzy Bubbles", "sans-serif"],
    },
    extend: {
      colors: {
        "app-red": "#A40001",
        "app-ash": "#F5F5F5",
        "app-ash-1": "#EAEAEA",
        "app-ash-2": "#A0A0A0",
        "app-slate": "#B6B6B6",
        "app-black": "#171717",
      },
      spacing: {
        cont1300: "calc((100% - 1300px) / 2 )",
      },
    },
  },
  plugins: [],
};
