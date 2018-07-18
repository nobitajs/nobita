
const fs = require('fs');
const path = require('path');
const _ = require('lodash');
let fileNameArr = {
  service: [],
  controllers: []
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


module.exports = app => {
  let service = {};
  let controllers = {};

  readdir('./app/service/', 'service');
  readdir('./app/controllers/', 'controllers');

  let serviceNewArr = fileNameArr['service'].map((item) => {
    if (item.split('./app/service/')[1].indexOf('.js') != -1) {
      return item.split('./app/service/')[1].split('.js')[0].replace(/\//g, '.');
    }
  });

  for (let i in serviceNewArr) {
    service = _.merge(service, _.setWith({}, serviceNewArr[i], require(fileNameArr['service'][i])(app), Object));
  }

  let ctrlNewArr = fileNameArr['controllers'].map((item) => {
    if (item.split('./app/controllers/')[1].indexOf('.js') != -1) {
      return item.split('./app/controllers/')[1].split('.js')[0].replace(/\//g, '.');
    }
  });

  for (let i in ctrlNewArr) {
    controllers = _.merge(controllers, _.setWith({}, ctrlNewArr[i], require(fileNameArr['controllers'][i]), Object));
  }
  app.controllers = controllers;
  return {
    service
  };
}