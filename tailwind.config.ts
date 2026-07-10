/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#32b978',
          hover: '#279b63',
          dark: '#145c3b',
          deep: '#0f3324',
          soft: '#def3e7',
          softer: '#edf8f2',
        },
        bg: {
          DEFAULT: '#f7f8f5',
          warm: '#f3f4ef',
        },
        surface: {
          DEFAULT: '#ffffff',
          muted: '#eef1eb',
        },
        text: {
          primary: '#172019',
          secondary: '#626c65',
          tertiary: '#919a93',
        },
        border: {
          DEFAULT: 'rgba(23, 32, 25, 0.09)',
          strong: 'rgba(23, 32, 25, 0.15)',
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      maxWidth: {
        'content': '1280px',
      },
    },
  },
  plugins: [],
}
