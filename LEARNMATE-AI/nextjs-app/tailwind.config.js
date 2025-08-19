/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          500: '#4F46E5',
          600: '#4338CA',
        },
        purple: {
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
        },
        pink: {
          500: '#22D3EE',
        },
        red: {
          500: '#0EA5E9',
          600: '#0284C7',
        },
        green: {
          500: '#06B6D4',
          600: '#0891B2',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 