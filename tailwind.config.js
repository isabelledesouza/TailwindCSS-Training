module.exports = {
  mode: 'jit',
  purge: [
    './**/*html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screen: {
      'md': '768px',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
