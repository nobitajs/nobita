
module.exports = {
  async index (ctx) {
    let res = await ctx.service.main.getName();
    let data = await ctx.db.user.find({});
    console.log(data);
    ctx.body = ctx.nunjucks.render('index.html', res.data);
  }
}
