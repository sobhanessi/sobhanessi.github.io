// this file tends to work only in windows for working with docker
module.exports = {
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 800,
      aggregateTimeout: 300,
    };
    return config;
  },
  compiler: {
    styledComponents: true,
  },
};
