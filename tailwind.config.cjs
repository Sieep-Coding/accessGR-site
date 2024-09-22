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
  primary: "#7E57C2", // A softer purple
  "purple-light": "#E1BEE7", // Light purple for accents
  "blue-dark": "#263238",
  secondary: "#81C784", // A fresher green
  "body-color": "#9E9E9E",
  "body-secondary": "#B0BEC5",
  warning: "#FFAB00",
  stroke: "#B0BEC5",
  "gray-1": "#F5F5F5",
  "gray-2": "#CFD8DC",
  "gray-7": "#B0BEC5",
  "accent-1": "#FF6F61", // Coral for an inviting touch
  "accent-2": "#64B5F6", // Light blue for freshness
},
      boxShadow: {
        "testimonial-btn": "0px 0px 0px 0px rgba(0, 0, 0, 0.0)",
        1: "0px 0px 0px 0px rgba(0, 0, 0, 0.0)",
        2: "0px 8px 0px 0px rgba(0, 0, 0, 0.0)",
      },
    },
  },
  plugins: [],
}