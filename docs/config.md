# 配置文件

## cache
- 类型：Number
- 默认值： null

```js
// config.*.js
exports.cache = ${length} // 默认1000
```

## logger
- 类型：Object
- 默认值： null

```js
// config.*.js
exports.logger = {
  path: './logs/', // 日志位置
  level: 'off'     // 日志打印等级 | ALL < TRACE < DEBUG < INFO < WARN < ERROR < FATAL < MARK < OFF
}

```

## temp
- 类型：Object
- 默认值： null

```js
// config.*.js
exports.temp = {
  ext: 'html',  // 模板后缀
  path: path.join(__dirname, '../views'),  // 模板路径
}
```

## mongo
- 类型：Object
- 默认值： null

```js
// config.*.js
exports.mongo = {
  url: 'mongodb://localhost:27017/数据库名',
  tables: {
    database: {
      age: Number,
      name: {
        type: String,
        unique: true
      },
      ...           
    }
  }
}

// 链接多个数据库
exports.mongo = {
  clients: {
    db1: {
      url: 'mongodb://localhost:27017/数据库名-1',
      tables: {
        database: {
          age: Number,
          name: {
            type: String,
            unique: true
          }               
        }
      }
    },

    db2: {
      url: 'mongodb://localhost:27017/数据库名-2',
      tables: {
        database: {
          age: Number,
          name: {
            type: String,
            unique: true
          }          
        }
      }
    },
    ...
  }
  
}
```

##### Schema
- type: 字段类型
   - String      字符串
   - Number      数字    
   - Date        日期
   - Buffer      二进制
   - Boolean     布尔值
   - Mixed       混合类型
   - ObjectId    对象ID    
   - Array       数组
- required: 是否必填
- default: 默认值
- validate: 自定义匹配
- min: 最小值(只适用于数字)
- max: 最大值(只适用于数字)
- match: 正则匹配(只适用于字符串)
- enum:  枚举匹配(只适用于字符串)
- unique: 是否唯一


## mysql
- 类型：Object
- 默认值： null

```js
//config.*.js
exports.mysql = {
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'database'
};

```
## session
- 类型：Object
- 默认值： null

```js
// config.*.js
exports.session = {
  keys: [key],
  key: 'NOBITA_SESSION', //cookie key (default is koa:sess)
  maxAge: (86400000 * 7), // cookie的过期时间 maxAge in ms (default is 1 days)
  overwrite: true, //是否可以overwrite    (默认default true)
  httpOnly: true, //cookie是否只有服务器端可以访问 httpOnly or not (default true)
  signed: true, //签名默认true
  rolling: false, //在每次请求时强行设置cookie，这将重置cookie过期时间（默认：false）
  renew: false, //(boolean) renew session when session is nearly expired
}
```

## redis
- 类型：Object
- 默认值： null

```js
// config.*.js
exports.redis = {
  port: 6379,          // Redis port
  host: '127.0.0.1',   // Redis host
  family: 4,           // 4 (IPv4) or 6 (IPv6)
  password: 'auth',
  db: 0
}
```

## listen
- 类型：Object
- 默认值： null

```js
// config.*.js
exports.listen = { 
  port: 6001,   // 端口
  callback() {  
    // 监听端口回调
  }
}
```

## static
- 类型：Object
- 默认值： null

```js
// config.*.js
exports.static = {
  path: path.join(__dirname, '../views/static'), // 静态资源路径
  pathPrefix: '/static' // 静态资源别名
}
```

## middleware
- 类型：Array
- 默认值： null


```js
// config.*.js
exports.middleware = ['isLogin'], // 中间件名称

exports.isLogin: {
  match: /\/index/ // 路由匹配规则
}
```

## xss
- 类型：Boolean
- 默认值： null

```js
// config.*.js
exports.xss = true
```