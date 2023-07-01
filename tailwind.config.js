/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "Montserrat",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "0",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1120px",
    },

    extend: {
      colors: {
        azul: "#2175D",
        amarillo: "#FFC000",
        celeste: "#5DE1E6",
      },
    },
  },
  plugins: [],
};
