
const fs = require('fs');
const path = require('path');
const config = require('./config/config.default');
const _ = require('lodash');
let dir = './app/service/';
let ext = '.js';
let first = true;
let fileNameArr = [];
let middlewares = [];

// 读取service文件夹
const readdir = (filePath) => {

  let data = fs.readdirSync(path.join(__dirname, filePath));
  first = false;
  data.map((i) => {
    let newfilePath = `${filePath}/${i}`.replace('//', '/');
    if (i.indexOf('.') == -1) {
      readdir(newfilePath);
    } else if (fileNameArr.indexOf(newfilePath) == -1) {
      fileNameArr.push(newfilePath);
    }
  });
};

/** 中间件 */

module.exports = async (ctx, next) => {
  let service = {};

  // 只有第一次访问读文件
  first && readdir(dir);
  // service
  let serviceNewArr = fileNameArr.map((item) => {
    if (item.split(dir)[1].indexOf(ext) != -1) {
      return item.split(dir)[1].split(ext)[0].replace(/\//g, '.');
    }
  });
  for (let i in serviceNewArr) {
    service = _.merge(service, _.setWith({}, serviceNewArr[i], require(fileNameArr[i])(ctx), Object));
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