// See default config https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
module.exports = {
  theme: {
    screens: {
      tablet: '770px',

      laptop: '1026px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1440px'
      // => @media (min-width: 1280px) { ... }
    },
    container: {
      center: true
    },
    extend: {}
  },
  variants: {
    textColor: ['group-hover']
  }
};
