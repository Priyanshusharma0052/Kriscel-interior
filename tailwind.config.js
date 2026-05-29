/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#B9905A",
        dark: "#140F14",
        light: "#F7F2EA",
      },
      boxShadow: {
        soft: "0 22px 70px rgba(47, 39, 32, 0.13)",
      },
    },
  },
  plugins: [],
};
