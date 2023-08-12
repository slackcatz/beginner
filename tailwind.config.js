/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "clr-1": "#900C3F",
      "clr-2": "#C70039",
      "clr-3": "#F94C10",
      "clr-4": "#F8DE22",
    },
  },
  plugins: [require("daisyui")],
};
