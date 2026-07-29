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
          DEFAULT: '#2f9a5f',
          hover: '#268550',
          dark: '#1f803c',
          deep: '#0f3324',
          soft: '#dff3e6',
          softer: '#edf8f2',
        },
        pillar: {
          earn: '#1f803c',
          spend: '#8c57ad',
          train: '#1f6ea8',
        },
        bg: {
          DEFAULT: '#f3f6ef',
          warm: '#eef3e8',
        },
        surface: {
          DEFAULT: '#ffffff',
          muted: '#e7eee0',
        },
        text: {
          primary: '#172019',
          secondary: '#5d675f',
          tertiary: '#8b948c',
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
