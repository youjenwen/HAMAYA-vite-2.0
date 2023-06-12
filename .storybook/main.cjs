const {
  mergeConfig
} = require('vite');
const path = require('path');
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", '@storybook/addon-mdx-gfm'],
  "framework": {
    name: "@storybook/react-vite",
    options: {}
  },
  "features": {
    "storyStoreV7": true
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@': path.resolve('src'),
          '@Component': path.resolve(__dirname, './src/components'),
          '@Styles': path.resolve(__dirname, './src/styles'),
          '@Stories_modules': path.resolve(__dirname, './src/stories/modules'),
          // '@Stories_components': path.resolve(__dirname, './src/stories/components'),
          '@Images': path.resolve(__dirname, './public/images')
        }
      }
    });
  },
  docs: {
    autodocs: true
  }
};