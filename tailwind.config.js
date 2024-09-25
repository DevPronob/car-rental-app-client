/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('https://i.ibb.co.com/Sdq3pn1/banner-Car.jpg')",
      },
    },
  },
  plugins: [],
}