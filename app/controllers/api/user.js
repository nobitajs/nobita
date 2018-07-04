
module.exports = {
  async get(ctx) {
    const body = ctx.query;
    let data = await ctx.db.find(body);
    ctx.body = data;
  },

  async add(ctx) {
    const body = ctx.request.body;
    let data = await ctx.db.insert(body);
    ctx.body = data;
  },

  async set(ctx) {
    const body = ctx.request.body;
    let data = await ctx.db.update({ _id: ctx.params.id }, body);
    ctx.body = data;
  },

  async del(ctx) {
    let data = await ctx.db.remove({ _id: ctx.params.id });
    ctx.body = data;
  }
}


