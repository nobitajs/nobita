module.exports = app => {
  const modal = require("koa-auto-mongo")(app);
  let _f = {}
  for (let table in app.config.mongoConf.tables) {
    _f[table] = {
      find(sql, data) {
        return new Promise((resolve, reject) => {
          modal[table].find(sql, null, data, (err, res) => {
            if (err) {
              console.log(err);
              resolve({
                code: 201,
                data: {},
                msg: `fail: ${err}`
              });
            } else {
              resolve({
                code: 200,
                data: {
                  list: res
                },
                msg: 'success'
              });
            }
          })
        });
      },

      insertMany(sql) {
        return new Promise((resolve, reject) => {
          for (let i in sql) {
            sql[i] = _.merge(sql[i], {
              updateTime: (+new Date()),
              createTime: (+new Date())
            })
          }
          modal[table].insertMany(sql, function (err, res) {
            if (err) {
              console.log(err);
              resolve({
                code: 201,
                data: {},
                msg: `fail: ${err}`
              });
            }
            else {
              resolve({
                code: 200,
                data: res,
                msg: 'success'
              });
            }

          });
        });
      },

      insert(sql) {
        return new Promise((resolve, reject) => {
          sql = _.merge(sql, {
            updateTime: (+new Date()),
            createTime: (+new Date())
          })
          modal[table].insertMany(sql, function (err, res) {
            if (err) {
              console.log(err);
              resolve({
                code: 201,
                data: {},
                msg: `fail: ${err}`
              });
            }
            else {
              resolve({
                code: 200,
                data: res,
                msg: 'success'
              });
            }

          });
        });

      },

      update(sql, newDate, data) {
        return new Promise((resolve, reject) => {
          newDate = _.merge(newDate, { updateTime: (+new Date()) })
          modal[table].update(sql, newDate, {upsert: true}, (err, res) => {
            if (err) {
              console.log(err);
              resolve({
                code: 201,
                data: {},
                msg: `fail: ${err}`
              });
            } else {
              resolve({
                code: 200,
                data: res,
                msg: 'success'
              });
            }
          })
        });
      },

      remove(sql) {
        return new Promise((resolve, reject) => {
          modal[table].remove(sql, (err, res) => {
            if (err) {
              console.log(err);
              resolve({
                code: 201,
                data: {},
                msg: `fail: ${err}`
              });
            } else {
              resolve({
                code: 200,
                data: res,
                msg: 'success'
              });
            }
          })
        });
      }
    };
  }

  return _f;
 
}