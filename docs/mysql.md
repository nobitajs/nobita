# Mysql
> MySQL 是最流行的关系型数据库管理系统，在WEB应用方面 MySQL 是最好的RDBMS(Relational Database Management System：关系数据库管理系统)应用软件之一。

- 因插件较大，框架就不默认引入，如需要使用 mysql 则自行 install 即可。

```
$ npm install -D sequelize mysql2
```

## 配置 Mysql
```js
//config.*.js
module.exports = app => {
  return {
    mysql: {
      host: 'localhost',
      user: 'user',
      password: 'password',
      database: 'database',
      tables: {
        tableTest: {
          age: app.Sequelize.INTEGER,
          name: app.Sequelize.STRING
        },
      },
      option: {
        // ...
      }
    }
  };
};
```

## 字段类型
```
Sequelize.STRING                      // VARCHAR(255)
Sequelize.STRING(1234)                // VARCHAR(1234)
Sequelize.STRING.BINARY               // VARCHAR BINARY
Sequelize.TEXT                        // TEXT
Sequelize.TEXT('tiny')                // TINYTEXT

Sequelize.INTEGER                     // INTEGER
Sequelize.BIGINT                      // BIGINT
Sequelize.BIGINT(11)                  // BIGINT(11)

Sequelize.FLOAT                       // FLOAT
Sequelize.FLOAT(11)                   // FLOAT(11)
Sequelize.FLOAT(11, 12)               // FLOAT(11,12)

Sequelize.DOUBLE                      // DOUBLE
Sequelize.DOUBLE(11)                  // DOUBLE(11)
Sequelize.DOUBLE(11, 12)              // DOUBLE(11,12)

Sequelize.DECIMAL                     // DECIMAL
Sequelize.DECIMAL(10, 2)              // DECIMAL(10,2)

Sequelize.DATE                        // DATETIME
Sequelize.DATE(6)                     // DATETIME(6) 针对 mysql 5.6.4+. 小数秒支持多达6位精度
Sequelize.DATEONLY                    // DATE 不带时间.
Sequelize.BOOLEAN                     // TINYINT(1)

Sequelize.ENUM('value 1', 'value 2')  // 一个允许具有 “value 1” 和 “value 2” 的 ENUM

Sequelize.GEOMETRY                    // 空间列.
Sequelize.GEOMETRY('POINT')           // 具有几何类型的空间列.
```

## 执行sql语句
```js
// app/controllers/test.js
module.exports = {
  async get() {
    const ctx = this;
    const res = await await ctx.mysql.database.findAll({});
    ctx.body = res;
  }
}
```

- 详细可看 [sequelize官网](https://demopark.github.io/sequelize-docs-Zh-CN/)