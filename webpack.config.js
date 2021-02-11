const pluginList = require("@mozaic-ds/css-dev-tools/postcssPluginConfig");
const scssSyntax = require("postcss-scss");

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: "postcss-loader",
        options: {
          postcssOptions: {
            ident: "postcss",
            syntax: scssSyntax,
            plugins: pluginList,
          },
        },
      },
    ],
  },
};
