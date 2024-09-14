/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: "class",
  theme: {
    screens: {
      sm: "540px",
      md: "720px",
      lg: "960px",
      xl: "1140px",
      "2xl": "1320px",
    },
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        white: "#F9F9F9",
        black: "#121212",
        "dark-700": "#1D1D1D",
        dark: {
          DEFAULT: "#181818",
          2: "#2D2D2D",
          3: "#434343",
          4: "#616161",
          5: "#9E9E9E",
          6: "#BEBEBE",
          7: "#D3D3D3",
          8: "#E0E0E0",
        },
        primary: "#5C6BC0",
        "blue-dark": "#263238",
        secondary: "#00C853",
        "body-color": "#757575",
        "body-secondary": "#B0BEC5",
        warning: "#FFAB00",
        stroke: "#B0BEC5",
        "gray-1": "#ECEFF1",
        "gray-2": "#CFD8DC",
        "gray-7": "#B0BEC5",
      },
      boxShadow: {
        input: "0px 8px 24px rgba(0, 0, 0, 0.1)",
        form: "0px 4px 60px -10px rgba(0, 0, 0, 0.1)",
        pricing: "0px 0px 50px 0px rgba(0, 0, 0, 0.1)",
        "switch-1": "0px 2px 8px rgba(0, 0, 0, 0.2)",
        testimonial: "0px 16px 32px 0px rgba(0, 0, 0, 0.1)",
        "testimonial-btn": "0px 12px 20px 0px rgba(0, 0, 0, 0.15)",
        1: "0px 4px 8px 0px rgba(0, 0, 0, 0.2)",
        2: "0px 8px 16px 0px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
}