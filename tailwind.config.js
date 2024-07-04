/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: { yellow: { 100: "#FFF3E3", 200: "#B88E2F" } },
      fontFamily: {
        "custom-poppins": ["Poppins"],
      },
    },
  },
  plugins: [],
};
