module.exports = async (ctx) => {
  let { login } = ctx.query;
  if (login == 1) {
    await ctx.redirect('/login');
  }
};