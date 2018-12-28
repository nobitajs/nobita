module.exports = error = async (ctx) => {
  console.log(ctx.request.url, ctx.response.status);
  if (ctx.response.status == 404) {
    //...
  } else {
    //...
  }

};