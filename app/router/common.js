
module.exports = app => {
  const header = ctx => {
    ctx.response.type = 'html';
    ctx.response.body = '<a href="/">header</a>';
  };

  app.router.get('/header', header);
}