
const fs = require('fs');
const path = require('path');
const config = require('./config/config.default');
const _ = require('lodash');


let fileNameArr = {
  service: [],
}
// 读取service文件夹
const readdir = (filePath, key) => {
  let data = fs.readdirSync(path.join(__dirname, filePath));
  data.map((i) => {
    let newfilePath = `${filePath}/${i}`.replace('//', '/');
    if (i.indexOf('.') == -1) {
      readdir(newfilePath, key);
    } else {
      fileNameArr[key].push(newfilePath);
    }
  });
};

/** 中间件 */
let middlewares = [];
module.exports = async (ctx, next) => {
  let service = {};
  readdir('./app/service/', 'service');

  // service
  let serviceNewArr = fileNameArr['service'].map((item) => {
    if (item.split('./app/service/')[1].indexOf('.js') != -1) {
      return item.split('./app/service/')[1].split('.js')[0].replace(/\//g, '.');
    }
  });
  for (let i in serviceNewArr) {
    service = _.merge(service, _.setWith({}, serviceNewArr[i], require(fileNameArr['service'][i])(ctx), Object));
  }
  ctx = _.merge(ctx, {service});
  // 中间件
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