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
        white: "#FFFFFF",
        black: "#1D1F21",
        "dark-700": "#0D1117",
        dark: {
          DEFAULT: "#0F172A",
          2: "#1F2937",
          3: "#2D3748",
          4: "#4A5568",
          5: "#6B7280",
          6: "#9CA3AF",
          7: "#D1D5DB",
          8: "#E5E7EB",
        },
        primary: "#4F46E5",
        "blue-dark": "#2C3E50",
        secondary: "#10B981",
        "body-color": "#6B7280",
        "body-secondary": "#9CA3AF",
        warning: "#F59E0B",
        stroke: "#D1D5DB",
        "gray-1": "#F3F4F6",
        "gray-2": "#E5E7EB",
        "gray-7": "#CBD5E1",
      },
      boxShadow: {
        input: "0px 8px 24px rgba(0, 0, 0, 0.05)",
        form: "0px 2px 60px -10px rgba(0, 0, 0, 0.08)",
        pricing: "0px 0px 50px 0px rgba(0, 0, 0, 0.1)",
        "switch-1": "0px 2px 6px rgba(0, 0, 0, 0.15)",
        testimonial: "0px 12px 24px 0px rgba(92, 115, 160, 0.08)",
        "testimonial-btn": "0px 10px 18px 0px rgba(72, 72, 138, 0.1)",
        1: "0px 2px 4px 0px rgba(166, 175, 195, 0.35)",
        2: "0px 6px 14px 0px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
}
