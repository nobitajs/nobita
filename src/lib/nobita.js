const Koa = require('koa');
const serve = require('koa-static-plus');
const koaBody = require('koa-body');
const helmet = require("koa-helmet");
const session = require('koa-session');
const favicon = require('koa-favicon');
const path = require('path');
const requireJS = require('nobita-require');
const init = require('nobita-init');
const myRouter = requireJS('./app/router.js');
const ready = requireJS('./ready.js');
const xss = require('nobita-xss');
const catchError = require('nobita-catch');

class Nobita extends Koa {
  constructor(options = {}) {
    super();
    this.options = options;
    this.quoteContext = {
      ctx: this.context
    };
    Nobita.createAnonymousContext = Nobita.createAnonymousContext.bind(this);
    this.start();
  };

  static async createAnonymousContext() {
    let _context = requireJS('./app/extend/context.js') || {};
    this.router = require('nobita-router')(this);
    this.curl = _context.curl = require('nobita-curl');
    this.version = _context.version = require('../package.json').version;
    this.config = _context.config = await require('nobita-config')(this);
    this.cache = _context.cache = require('nobita-cache')(this);
    this.nunjucks = _context.nunjucks = require('nobita-nunjucks')(this);
    this.logger = _context.logger = require('nobita-logger')(this);
    this.db = _context.db = require('nobita-mongo')(this);
    this.mysql = _context.mysql = require('nobita-mysql')(this);
    this.redis = _context.redis = require('nobita-session-redis')(this);
    _context.app = this;
    return Object.assign(this.context, _context);
  }

  async start() {
    this.emit('configWillLoad', this);
    try { this.Sequelize = require('sequelize'); } catch (e) { }

    this.context = await Nobita.createAnonymousContext();
    const ajv = require('nobita-ajv')(this);
    require('nobita-schedule')(this);
    await require('nobita-loader')(this);
    const compose = require('nobita-middleware')(this);
    myRouter && await myRouter(this);

    /** 静态资源路径 */
    if (this.config.static && this.config.static.path) {
      const main = serve(this.config.static.path, this.config.static);
      this.use(main);
    }
    this.emit('didLoad', this);
    this
      .use(favicon(path.join(__dirname, './favicon.ico')))
      .use(catchError)
      .use(session(this.config.session, this))
      .use(helmet())
      .use(koaBody(this.config.koaBody))
      .use(xss)
      .use(ajv)
      .use(init)
      .use(compose)
      .use(this.router.routes())
      .use(this.router.allowedMethods())
      .listen(this.config.listen.port, () => { this.emit('serverDidReady', this); });

  }

}

module.exports = Nobita;