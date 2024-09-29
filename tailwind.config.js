/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('https://i.ibb.co.com/Sdq3pn1/banner-Car.jpg')",
        'about_bg': "url('https://demo.awaikenthemes.com/novaride/wp-content/uploads/2024/08/page-header-bg.jpg')",
      },
    },
  },
  plugins: [],
}