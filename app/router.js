/**
 * 
 * 路由入口
 * @param {*} app 
 */
module.exports = app => {
  
  require('./router/index.js')(app);
  require('./router/api.js')(app);
}