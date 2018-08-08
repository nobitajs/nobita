module.exports = async (ctx, next) => {
  let { login } = ctx.query;
  if (login == 1) {
    await ctx.redirect('/login');
  }
  await next();
};