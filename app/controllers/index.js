
module.exports = async (ctx) => {
  let data = await ctx.service.main.getName();
  ctx.body = ctx.nunjucks.render('index.html', data);
}
