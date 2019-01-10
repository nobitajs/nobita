const path = require('path');

config = {
  temp: {
    ext: 'html',
    path: path.join(__dirname, '../views'),
  },

  static: {
    path: path.join(__dirname, '../views/static'),
    pathPrefix: '/static'
  },

  session: {
    keys: ['ab18ae83-2f8c-4959-801c-3fcd389b0320'],
    key: 'NOBITA_SESSION', /** (string) cookie key (default is koa:sess) */
    maxAge: (86400000 * 7),
    overwrite: true, /** (boolean) can overwrite or not (default true) */
    httpOnly: true, /** (boolean) httpOnly or not (default true) */
    signed: true, /** (boolean) signed or not (default true) */
    rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
    renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
  },

};

module.exports = config;
