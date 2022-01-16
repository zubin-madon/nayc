module.exports = {
  purge: [
    "./src/**/*.{js,jsx}",
    "./public/index.html",
    "./src/*.{js,jsx}",
  ],
  content: [
    './src/*.{html,js}',
    './index.html',
    './public/index.html',
    './src/*.css',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
