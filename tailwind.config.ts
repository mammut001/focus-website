/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        study: 'hsl(217, 91%, 60%)',
        work: 'hsl(142, 71%, 45%)',
        custom: 'hsl(25, 95%, 53%)',
        'bg-dark': 'hsl(222, 47%, 5%)',
        'bg-card': 'hsl(222, 30%, 10%)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
