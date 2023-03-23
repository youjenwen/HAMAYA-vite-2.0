/** @type {import('tailwindcss').Config} */

module.exports = {
  corePlugins: {
    preflight: false
  },
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/stories/components/**/*.{js,ts,jsx,tsx}',
    './src/stories/modules/**/*.{js,ts,jsx,tsx,scss}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
