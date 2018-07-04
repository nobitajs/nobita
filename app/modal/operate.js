const modal = require("./modal.js");

module.exports = {
  find(sql) {
    return new Promise((resolve, reject) => {
      modal.find(sql, (err, res) => {
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

  insert(sql) {
    return new Promise((resolve, reject) => {
      modal.insertMany(sql, function (err, res) {
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

  update(sql, newDate) {
    return new Promise((resolve, reject) => {
      modal.update(sql, newDate, (err, res) => {
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
      modal.remove(sql, (err, res) => {
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


}