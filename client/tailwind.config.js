module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
      colors: {
        homeImg: '#DCE4F7',
        ARbg: '#80ffd4',
        page404A: "#1C1023",
        page404B: "#B53FA6",
        page404C: "#351945",

        homeBg: '#E94560',
      },
      zIndex: {
        "-1": "-1",
      },
    },
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
      'carattere': ['Carattere', 'cursive'],
      'sourceSerifPro': ['Source Serif Pro'],
      "fontVollkorn": ['Vollkorn'],
      'body': ['Open Sans'],
    }
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
  },
  plugins: [],
}
