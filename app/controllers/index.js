
module.exports = async (ctx) => {
  let data = await ctx.service.main.getName(ctx);
  ctx.body = ctx.nunjucks.render('index.html', data);
}
