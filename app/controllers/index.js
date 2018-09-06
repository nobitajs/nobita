
module.exports = {
  async index (ctx) {
    let res = await ctx.service.main.getName();
    let data2 = await ctx.db.user.find();
    ctx.body = ctx.nunjucks.render('index.html', res.data);
  }
}
