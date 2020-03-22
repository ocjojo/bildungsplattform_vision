// vue.config.js
// see https://cli.vuejs.org/config/
module.exports = {
  devServer: {
    port: 8080,
    disableHostCheck: true
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/colors.scss";
        `
      }
    }
  }
};
