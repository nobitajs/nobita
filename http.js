const axios = require('axios');
module.exports = {
  $http(option) {
    let ctx = this;
    option = Object.assign({
      headers: {
        Cookie: ctx.headers.cookie || '',
        referer: ctx.headers.referer || '',
      },
      responseType: 'json',
    }, option);

    return new Promise((resolve, reject) => {
      axios(option)
        .then((res => {
          resolve(res.data);
        }))
        .catch(function (err) {
          resolve({
            code: 500,
            data: err.config.data,
            msg: `error: ${err.config.url}`
          })
        });
    })
  }

}
