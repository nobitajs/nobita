module.exports = ctx => { 
  return {
    async getName() {
      let result = await ctx.curl({
        url: 'https://api.iamtang.com/api/get',
        data: {
          id: 1
        }
      });
      return result;
    }
  }
}
