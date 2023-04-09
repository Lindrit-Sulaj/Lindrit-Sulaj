/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'web': '1200px'
      },
      colors: {
        'gold': '#D98F04',
        'byzantine-blue': '#054ADA',
        'text-blue': '#AFC8FD',
        'persian-blue': '#003FC1',
        'gold-hover': '#B87904',
        'custom-black': '#0e141b'
      },
    },
  },
  plugins: [],
}