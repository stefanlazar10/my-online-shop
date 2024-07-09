/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: { yellow: { 100: "#FFF3E3", 200: "#B88E2F" } },
      fontFamily: {
        "custom-poppins": ["Poppins"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
