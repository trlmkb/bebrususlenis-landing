module.exports = (context) => ({
  ident: 'postcss',
  syntax: 'postcss-scss',
  map: context.env === 'development' ? context.map : false,
  plugins: {
    'postcss-import': {},
    'postcss-functions': {
      functions: {
      },
    },
    'postcss-hexrgba': {},
    precss: {},
    'postcss-preset-env': {
      stage: 0,
      preserve: true,
      importFrom: './src/css/variables.css',
      autoprefixer: {
        grid: true,
      },
      features: {
        'nesting-rules': false,
        'custom-properties': false,
      },
    },
    'postcss-responsive-type': {}, // https://github.com/seaneking/postcss-responsive-type
    cssnano: context.env === 'production' ? {} : false,
  },
});
