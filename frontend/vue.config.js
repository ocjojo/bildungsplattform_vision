const IconfontWebpackPlugin = require("iconfont-webpack-plugin");

// vue.config.js
// see https://cli.vuejs.org/config/
module.exports = {
  devServer: {
    port: 8080,
    disableHostCheck: true,
    proxy: {
      "^/api": {
        target: "http://localhost:3000"
      }
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: loader => [new IconfontWebpackPlugin(loader)]
      },
      sass: {
        prependData: `
          @import "@/colors.scss";
        `
      }
    }
  }
};
