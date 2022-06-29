module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    
    colors: {
      special: '#032174',
      primary: '#5B34EA',
      secondary: '#141B41',
      dark: '#202635',
      light: colors.gray[200],
      // grey and light-grey was intensionally named
      // so they don't match with tailwindcss gray
      grey: colors.gray[600],
      'light-grey': '#283145',
    },
  },
}
