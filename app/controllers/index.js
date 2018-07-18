
module.exports = async (ctx) => {
  let data = await ctx.service.index.index.index(ctx);
  ctx.body = ctx.nunjucks.render('index.html', data);
}
