
module.exports = async (ctx) => {
  let data = await ctx.service.main.getName(ctx);
  await ctx.render('index', data);
}


