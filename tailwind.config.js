/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'search-icon': "url('/img/searchIcon.svg')",
      }
    },
  },
  plugins: [],
}

