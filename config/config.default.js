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
        },
      
        createTime: {
          type: Date,
          default: Date.now
        },
      
        updateTime: {
            type: Date,
            default: Date.now
        }                 
      }
    }
  },

  middleware: ['isLogin'],
  isLogin: {
    match: /\/index/
  },

}, config);

module.exports = config;
