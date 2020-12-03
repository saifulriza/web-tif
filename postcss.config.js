const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    purgecss({
      content: ['./public/index.html', './src/js/custom.js'],
      output: ['./public/dist/'],
    }),
  ],
};
