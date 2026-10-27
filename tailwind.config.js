/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: { extend: { colors: { ink: "#30221C", sand: "#D9C8B4", gold: "#B49A72", cream: "#F8F4ED" }, fontFamily: { display: ["Playfair Display", "serif"], sans: ["Manrope", "sans-serif"] } } },
  plugins: []
}