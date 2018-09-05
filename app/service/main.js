module.exports = ctx => { 
  return {
    async getName() {
      let result = await ctx.curl({
        url: 'http://yapi.iamtang.com/mock/6/getUser',
        data: {
          id: 1
        }
      });
      return result;
    }
  }
}
