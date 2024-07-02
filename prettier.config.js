const styleguide = require('@vercel/style-guide/prettier');

module.exports = {
  ...styleguide,
  plugins: [
    ...styleguide.plugins,
    'prettier-plugin-tailwindcss',
    'prettier-plugin-organize-imports',
  ],
  tailwindFunctions: ['classNames'],
  singleQuote: true,
  trailingComma: 'es5',
};
