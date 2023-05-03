/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        monospace: ['Roboto Mono', 'monospace'],
        Poppins: ["Poppins", "sans-serif"],
        Inter: ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}
