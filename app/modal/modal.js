const mongoose = require('mongoose');
const config = require('../../config/config.default');
mongoose.connect(config.mongoConf.url);

// 连接失败
mongoose.connection.on("error", function (err) {
  console.error("数据库链接失败:" + err);
});
// 连接成功
mongoose.connection.on("open", function () {
  console.log("数据库链接成功");
});
// 断开数据库
mongoose.connection.on("disconnected", function () {
  console.log("数据库断开");
});


const model = [];
for (let table in config.mongoConf.tables) {
  let Schema = new mongoose.Schema(config.mongoConf.tables[table]);
  model[table] = mongoose.model(table, Schema, table);
}


module.exports = model;