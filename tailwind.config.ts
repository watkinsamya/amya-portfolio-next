import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        pinkbrand: {
          50: '#fff1f7',
          100: '#ffe4f0',
          200: '#ffc9e3',
          300: '#ff9fd0',
          400: '#ff6db8',
          500: '#ff49a7', // primary
          600: '#ef2b8f',
          700: '#c01f75',
          800: '#921a5c',
          900: '#78184d'
        }
      },
      boxShadow: {
        soft: '0 8px 30px rgba(0,0,0,0.08)'
      }
    },
  },
  plugins: [],
}
export default config
