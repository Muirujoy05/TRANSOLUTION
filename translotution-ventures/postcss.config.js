module.exports = {
  plugins: {
    '@tailwindcss/postcss': {}, // Swapped from 'tailwindcss' to fix the compilation error
    autoprefixer: {},
  },
}