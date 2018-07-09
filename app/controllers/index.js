
module.exports = async (ctx) => {
  let data = await ctx.service.index.index.index(ctx);
  await ctx.render('index', data);
}
