
module.exports = app => {
  app.router.get('/', app.controllers.index.index);
}