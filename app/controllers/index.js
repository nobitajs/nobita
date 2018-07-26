
module.exports = async (ctx) => {
  let data = await ctx.service.main.getName();
  let data2 = await ctx.db.user.find();
  console.log(data, data2);
  ctx.body = ctx.nunjucks.render('index.html', data);
}
