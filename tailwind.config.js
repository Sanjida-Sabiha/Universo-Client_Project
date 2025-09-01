/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    // Disable default container sizes
    container: {
      // Default values will be overridden
      center: true,
      padding: '0',
    },
    extend: {
      container: {
        center: true, 
        padding:'18px',
        screens: {
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "1520px",
        },
      },
      fontFamily: {
        "Gilroy": ["Gilroy", "sans-serif"],
        "GTAmerica": ["GT America Trial", "sans-serif"],
      },
      colors:{
        'primaryColor':'#0E123C',
        'bannerBg':'#D8D9FF',
        'secondaryColor':'#24265C',
        'btnBg':'#F68B36',
        'borderColor':'#00000033',
        'cardBg':'#F8F3E1',
        'copyBg':'#282A65',

      },
      spacing:{
        '222':'222px',
        '322':'322px',
        '397':'397px',
        '430':'430px',
        '487':'487px',
        '541':'541px',
        '628':'628px',
        '641':'641px',
        '650':'650px',
        '706':'706px',
        '720':'720px',
        '724':'724px',
        '740':'740px',
        '770':'770px',
        '780':'780px',
        '896':'896px',
        '910':'910px',
        '912':'912px',
        '1031':'1031px',
        '1149':'1149px',
      },
      fontSize:{
        '22xl':'22px',
        '24xl': '24px',
        '26xl': '26px',
        '28xl':'28px',
        '30xl': '30px',
        '32xl':'32px',
        '40xl':'40px',
        '42xl':'42px',
        '44xl':'44px',
        '48xl':'48px',
        '50xl':'50px',
        '56xl':'56px',
        '64xl':'64px',
        '72xl':'72px',
      },
      boxShadow:{
        'boxShadow_1':'0px 80px 140px 0px #7C716933',
      },
    },
  },
  plugins: [],
}
