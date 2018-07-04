
module.exports = async (ctx) => {
  let data = await ctx.service.main.getName(ctx);
  console.log(1);
  await ctx.render('index', data);
}


