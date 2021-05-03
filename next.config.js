module.exports = {
  trailingSlash: true,
  assetPrefix: './',
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    };
  }
};