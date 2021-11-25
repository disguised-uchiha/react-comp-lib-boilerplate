var path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss")
        }
      }
    }
  ],
  typescript: {
    reactDocgen: false
  },

  core: { builder: "webpack5" },

  webpackFinal: async config => {
    // add SCSS support for CSS Modules
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader?modules&importLoaders",
        "sass-loader",
        // for tailwind @apply support
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [require("tailwindcss"), require("autoprefixer")]
            }
          }
        }
      ],
      include: path.resolve(__dirname, "../")
    });

    config.resolve.alias = {
      ...config.resolve.alias,
      "@app": path.resolve(__dirname, "../src/"),
      "@root": path.resolve(__dirname, "../"),
      globals: path.resolve(__dirname, "../src/styles/globals.scss")
    };

    return config;
  }
};
