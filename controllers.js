
const fs = require('fs');
const path = require('path');
const _ = require('lodash');
let fileNameArr = {
  controllers: []
}

// 读取文件夹
const readdir = (filePath, key) => {
  let data = fs.readdirSync(path.join(__dirname, filePath));
  data.map((i) => {
    let newfilePath = `${filePath}/${i}`.replace('//', '/');
    if (i.indexOf('.') == -1) {
      readdir(newfilePath, key);
    } else if (fileNameArr['controllers'].indexOf(newfilePath) == -1) {
      fileNameArr[key].push(newfilePath);
    }
  });
};

let controllers = {};
readdir('./app/controllers/', 'controllers');

let ctrlNewArr = fileNameArr['controllers'].map((item) => {
  if (item.split('./app/controllers/')[1].indexOf('.js') != -1) {
    return item.split('./app/controllers/')[1].split('.js')[0].replace(/\//g, '.');
  }
});

for (let i in ctrlNewArr) {
  controllers = _.merge(controllers, _.setWith({}, ctrlNewArr[i], require(fileNameArr['controllers'][i]), Object));
}

module.exports = controllers;