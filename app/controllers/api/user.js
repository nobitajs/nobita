
module.exports = {
  async get(ctx) {
    const body = ctx.query;
    let data = await ctx.db.user.find(body);
    ctx.body = data;
  },

  async add(ctx) {
    const body = ctx.request.body;
    let data = await ctx.db.user.insert(body);
    ctx.body = data;
  },

  async set(ctx) {
    const body = ctx.request.body;
    let data = await ctx.db.user.update({ _id: ctx.params.id }, body);
    ctx.body = data;
  },

  async del(ctx) {
    let data = await ctx.db.user.remove({ _id: ctx.params.id });
    ctx.body = data;
  }
}


