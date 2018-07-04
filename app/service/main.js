module.exports = () => {
  return {
    async getName(ctx) {
      let result = await ctx.$http({
        url: 'http://yapi.iamtang.com/mock/6/getUser',
        data: {
          id: 1
        }
      })
      return result;
    }
  }

}