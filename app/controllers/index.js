
module.exports = {
  async index (ctx) {
    let res = await ctx.service.main.getName();
    ctx.body = ctx.nunjucks.render('index.html', res.data);
  }
}
