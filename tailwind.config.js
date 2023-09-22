/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myPink: "#500724",
      },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
