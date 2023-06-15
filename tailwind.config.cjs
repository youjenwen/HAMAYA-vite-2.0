/** @type {import('tailwindcss').Config} */

const colorGuideLine = {
  primary: {
    main: '#00323d',
    'main-light': '#6a777a',
    'main-gary-light': '#bababa',
    accent: '#5b322f',
    'accent-light': '#f2f2f2',
    'gary-light': '#767676',
    'gary-dark': '#333333'
  }
};

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
        primary: {
          darkGreen: colorGuideLine.primary.main,
          gary: colorGuideLine.primary['main-light'],
          garyLight: colorGuideLine.primary['main-gary-light'],
          brown: colorGuideLine.primary.accent,
          beige: colorGuideLine.primary['accent-light'],
          darkGary: colorGuideLine.primary['gary-light'],
          iron: colorGuideLine.primary['gary-dark'],
          parallax: '#f0f8ff',
        }
      },
    },
    fontSize: {
      heading_1: '4rem',
      heading_2: '3rem',
      heading_3: '2rem',
      heading_4: '1.5rem',
      heading_5: '1.25rem',
      heading_6: '1.15rem',
      paragraph: '1rem',
      small: '0.85rem',
      minimum: '0.75rem'
    },
    fontFamily: {
      "Noto_Serif_Display": ['"Noto Serif Display"', 'serif'],
      'Prata': ['"Prata"', 'serif']
    }
  },
  plugins: [],
};