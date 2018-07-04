

module.exports = app => {
  app.router.get('/getUser', app.controllers.api.user.get);
  app.router.put('/setUser/:id', app.controllers.api.user.set);
  app.router.post('/addUser', app.controllers.api.user.add);
  app.router.del('/delUser/:id', app.controllers.api.user.del);
}