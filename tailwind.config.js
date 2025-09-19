/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f7f3f0',
          100: '#ede4dc',
          200: '#d9c7b8',
          300: '#c2a68e',
          400: '#a8856b',
          500: '#8B5E3C',
          600: '#7a4f33',
          700: '#65412a',
          800: '#533625',
          900: '#452e20',
        },
        accent: {
          50: '#f0f9f7',
          100: '#ddf2ed',
          200: '#bce4d9',
          300: '#8dd0c0',
          400: '#57b5a3',
          500: '#2E8B7D',
          600: '#236e63',
          700: '#1e5850',
          800: '#1c4742',
          900: '#1a3c38',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
}
