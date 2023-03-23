const { mergeConfig } = require('vite');
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@': path.resolve('src'),
          // '@/Component': path.resolve( 'src/components'),
          // '@/Styles': path.resolve( 'src/styles'),
          // '@/Stories_modules': path.resolve('src/stories/modules')
        }
      }
    })
  }
}