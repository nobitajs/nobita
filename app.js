const Koa = require('koa');
const nunjucks = require('./nunjucks');
const serve = require('koa-static-plus');
const koaBody = require('koa-body');
const helmet = require("koa-helmet");
const Router = require('koa-router');
const cluster = require('cluster');

const numCPUs = require('os').cpus().length;

const config = require('./config/config.default');
const context = require('./app/extend/context');
const helper = require('./app/extend/helper');
const operate = require('./app/modal/operate');
const logger = require('./logger');
const $http = require('./http');
const notfound = require('./app/middleware/notfound');
const app = new Koa();
app._ = require('lodash');
const { service } = require('./reader')(app);
app.router = new Router();
app.config = config;

require('./app/router')(app);

/** 中间件 */
let middlewares = [];
const middleware = async (ctx, next) => {
  config.middleware.map(async item => {
    if (!config[item] || config[item] && !config[item].match || config[item].match.test(ctx.request.url)) {
      if (!middlewares[item]) {
        middlewares[item] = require(`./app/middleware/${item}`);
      }
      middlewares[item](ctx, config[item]);
    }
  });
  await next();
};
/** 静态资源路径 */
const main = serve(config.static.path, config.static);
/** 扩展ctx */
app.context = Object.assign(app.context, context, $http, {
  config,
  nunjucks,
  service,
  helper,
  logger,
  
});

if (config.mongoConf && config.mongoConf.url && config.mongoConf.tables){
  app.context = Object.assign(app.context, {
    db: operate(app)
  });
}

if (cluster.isMaster && process.env.RUN_ENV == 'prod') {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on('fork', function (worker) {
    console.log(`[master] : fork worker ${worker.id}`);
  });

  cluster.on('exit', function (worker, code, signal) {
    console.log(`[master] : worker ${worker.id} died`);
  });
} else {
  app
    .use(helmet())
    .use(main)
    .use(koaBody())
    .use(middleware)
    .use(app.router.routes())
    .use(notfound)
    .listen(config.listen.port, config.listen.callback);
}
