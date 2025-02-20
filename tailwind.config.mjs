/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '0px -2px 9px 0px rgb(255 255 255 / 20%), 1px -2px 8px 2px rgb(255 255 255 / 14%), 1px 1px 5px 0px rgb(255 255 255 / 12%)',
      },
      keyframes: {
        slideInFromLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        slideInFromLeft: 'slideInFromLeft 1s ease-out',
      },
      colors: {
        text: {
          primary: '#ebe4dcd4',
          secondary: '#2e2422',
          teal: '#3A8274',
        },
        bg: {
          primary: '#7e7e7ea6',
          secondary: '#2e2422',
          gray: '#2d2d2d',
        },
      },
      backgroundImage: {
        'milky-way': "url('/milky-way.jpg')",
        'footer-texture': "url('/path-to-footer-image.png')",
      },
    },
  },
  plugins: [],
}