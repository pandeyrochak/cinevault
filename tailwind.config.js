/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          violet: "#9485e0",
          yellow: "#ffee00",
        },
        secondary: {
          gray: "#2e2e2e",
          brown: "#665000",
        },
      },
    },
  },
  plugins: [],
};
