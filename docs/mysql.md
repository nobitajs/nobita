# Mysql
> MySQL 是最流行的关系型数据库管理系统，在WEB应用方面 MySQL 是最好的RDBMS(Relational Database Management System：关系数据库管理系统)应用软件之一。

## 配置 Mysql
```js
//config.*.js
exports.mysql = {
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'database'
};
```

## 执行sql语句
```js
// app/controllers/test.js
module.exports = {
  async get() {
    const ctx = this;
    const res = await await ctx.mysql.sql('SELECT * FROM tables');;
    ctx.body = res;
  }
}
```