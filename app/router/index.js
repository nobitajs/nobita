
module.exports = app => {
  app.router.get('/', app.controllers.index.index);
  app.router.get('/index', app.controllers.index.index);
}