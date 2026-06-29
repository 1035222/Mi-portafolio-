/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7F3FBF",
        accent: "#7ee8c4",
        dark: "#0D1117",
        card: "#161B22",
      },
      fontFamily: {
        mono: ["Fira Code", "monospace"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}