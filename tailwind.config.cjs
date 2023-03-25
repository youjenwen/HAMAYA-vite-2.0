// const variables = require('./tailwind-variable.cjs');
// import variables from './tailwind-variables';
/** @type {import('tailwindcss').Config} */

module.exports = {
  corePlugins: {
    preflight: false
  },
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/stories/components/**/*.{js,ts,jsx,tsx}',
    './src/stories/modules/**/*.{js,ts,jsx,tsx,scss}'
  ],
  theme: {
    extend: {
      colors: {
        main: '#00323d',
        'main-light': '#6a777a',
        'main-gary-light': '#bababa',
        accent: '#5b322f',
        'accent-light': '#f2f2f2',
        'gary-light': '#767676',
        'gary-dark': '#333333'
      },
    },
  },
  plugins: [],
}
