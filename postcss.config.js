const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    purgecss({
      content: [
        './public/index.html',
        './src/js/custom.js',
        './public/gallery.html',
        './src/js/gallery.js',
      ],
      output: ['./public/dist/'],
    }),
  ],
};
