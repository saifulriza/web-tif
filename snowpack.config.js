/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/dist',
  },
  plugins: [
    [
      '@snowpack/plugin-optimize',
      {
        minifyJS: true,
        minifyCSS: true,
        minifyHTML: true,
        target: 'es2018',
      },
    ],
  ],
  install: [
    /* ... */
    'typed.js',
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};
