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

const Schema = new mongoose.Schema({
  age: Number,
  name: {
    type: String,
    unique: true
  }
});

const Model = mongoose.model(config.mongoConf.tables, Schema, config.mongoConf.tables);

module.exports = Model;