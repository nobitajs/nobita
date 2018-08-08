
const config = require('./config/config.default');
/** 中间件 */
let middlewares = [];
module.exports = app => {

  for (let i in config.middleware) {

    if (config.middleware[i]) {
      if (!middlewares[config.middleware[i]]) {
        middlewares[config.middleware[i]] = require(`./app/middleware/${config.middleware[i]}`);
      }

      if (!config[config.middleware[i]]) {
        config[config.middleware[i]] = {};
      }

      if (!config[config.middleware[i]].match) {
        config[config.middleware[i]].match = /\//;
      }

      app.router.get(config[config.middleware[i]].match, middlewares[config.middleware[i]]);
      app.router.post(config[config.middleware[i]].match, middlewares[config.middleware[i]]);
      app.router.put(config[config.middleware[i]].match, middlewares[config.middleware[i]]);
      app.router.del(config[config.middleware[i]].match, middlewares[config.middleware[i]]);
    }
  }
};