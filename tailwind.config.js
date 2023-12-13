/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./index.html","./src/app/js/script.js"],
  theme: {
    extend: {
      colors:{
        pink_mix: 'hsl(6, 100%, 80%) to hsl(335, 100%, 65%)',
        Pale_Blue: 'hsl(243, 100%, 93%)',
        Grayish_Blue: 'hsl(229, 7%, 55%)',
        Dark_Blue: 'hsl(228, 56%, 26%)',
        Very_Dark_Blue: 'hsl(229, 57%, 11%)',

      },
      fontFamily:{
        Raleway: "'Raleway', sans-serif",
      },
      backgroundImage:{
        'backgroundDesktop': 'url(../../assets/images/bg-desktop.png)',
        'backgroundMobile': 'url(../../assets/images/bg-mobile.png)',
      }
    },
  },
  plugins: [],
}

