const path = require('path');
const _ = require('lodash');
let config = require('./config.local');

const RUN_ENV = process.env.RUN_ENV;

if (RUN_ENV == 'prod') {
  config = require('./config.prod');
}
console.log(`env:${RUN_ENV}`);

config = _.merge({
  env: RUN_ENV,
  temp: {
    ext: 'html',
    path: path.join(__dirname, '../views'),
    nunjucksConfig: {
      trimBlocks: true
    }
  },

  view: {
    path: path.join(__dirname, '../views/static'),
    pathPrefix: '/static'
  },

  middleware: ['isLogin'],
  isLogin: {
    match: /\/index/
  },

  ...config

}, config);

module.exports = config;
