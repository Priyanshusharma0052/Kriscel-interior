/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#C8A97E",
        dark: "#111111",
        light: "#F8F5F2",
      },
      boxShadow: {
        soft: "0 20px 60px rgba(0,0,0,0.12)",
      },
    },
  },
  plugins: [],
};

