const path = require('path');
const _ = require('lodash');
let config = require('./config.local');

const RUN_ENV = process.env.RUN_ENV;
const argv = process.argv[2];

if (RUN_ENV == 'prod') {
  config = require('./config.prod');
}
console.log(`env:${RUN_ENV}`);

config = _.merge({
  env: RUN_ENV,
  argv,
  temp: {
    ext: 'html',
    path: path.join(__dirname, '../views'),
  },

  static: {
    path: path.join(__dirname, '../views/static'),
    pathPrefix: '/static'
  },

  mongoConf: {
    url: 'mongodb://localhost:27017/demo',
    tables: {
      user: {
        age: Number,
        name: {
          type: String,
          unique: true
        }
      }
    }
  },

  session: {
    keys: ['ab18ae83-2f8c-4959-801c-3fcd389b0320'],
    key: 'TECH_SESSION', /** (string) cookie key (default is koa:sess) */
    maxAge: (86400000 * 7),
    overwrite: true, /** (boolean) can overwrite or not (default true) */
    httpOnly: true, /** (boolean) httpOnly or not (default true) */
    signed: true, /** (boolean) signed or not (default true) */
    rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
    renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
  },

  middleware: ['isLogin'],
  isLogin: {
    match: /\/index/
  },

}, config);

module.exports = config;
