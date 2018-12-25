# ![avatar](https://api.iamtang.com/images/nobita.png)Nobita
![avatar](https://api.iamtang.com/images/bf47d0f9d72a6059be3961992234349b023bbad5.jpg)

## 介绍(v0.4.7)
Nobita 是一个基于Koa而诞生的一款框架。

## 建议安装淘宝镜像
```
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
```

## 快速初始化
```text
$ cnpm install nobita-cli -g
$ nobita-cli init
$ cd 项目名
$ cnpm install
```

## 启动项目
```text
$ npm run local  启动本地开发
$ npm run prod   启动线上命令
$ npm run stop   停止服务
$ npm run debug  调试模式
```



## 目录结构
```text
koa
├── package.json
├── app.js         
├── nodemon.json 
├── app
|   ├── router.js 
│   |  
│   ├── router   
│   |   └── api 
│   |  
│   ├── controller 
│   |   └── api  
│   |  
│   ├── service 
│   |   
│   ├── middleware
│   |   
│   ├── logs    
│   |   
│   ├── view     
│   |   
│   └── extend        
│       ├── helper.js   
│       └── context.js 
│   
├── config              
|   ├── config.default.js
│   ├── config.prod.js
|   └── config.local.js
└── 
```

### 目录结构约定：
- app.js 项目入口

- app/router.js 路由入口

- app/router/** 子路由

- app/router/api/** 前端接口路由

- app/controller/** 对用户的请求参数进行处理

- app/controller/api/** 前端接口的controller

- app/service/** 调用第三方api

- app/middleware/*.js 中间件

- app/extend/helper.js 工具函数

- app/extend/context.js ctx函数扩展

- config/config.default.js 通用配置文件

- config/config.local.js 开发通用配置文件

- config/config.prod.js 线上通用配置文件

- view/** 前端目录

- logs/** 日志文件


## 内置对象
- server: 调用第三方api
- curl: http请求
- helper: 工具函数
- logger: 日志打印
- db: mongo数据库操作
- mysql: mysql数据库操作
- redis: redis缓存操作
- request: 获取到当前请求的 Request
- nunjucks: 模板引擎
- cache: 内部缓存

## 内部缓存
- 队列（Queue）是一种遵从先进先出（First in, first out。简称FIFO）原则的有序集合。
```js
// config.*.js
exports.cache = ${length} // 默认1000
```


## 日志打印(log4js)
```js
// config.*.js
exports.logger = {
  path: './logs/', // 日志位置
  level: 'off'     // 日志打印等级 | ALL < TRACE < DEBUG < INFO < WARN < ERROR < FATAL < MARK < OFF
}

// 使用方式
ctx.logger.debug(data);
```


## 前端模板
> 模板语法基于nunjucks
```js
// config.*.js
exports.temp = {
  ext: 'html',  // 模板后缀
  path: path.join(__dirname, '../views'),  // 模板路径
}

```

## http请求(axios)
```js
// 例子
await ctx.curl({
  url: 'http://localhost:8080/test',
  method: 'get',
  params: {},
});
```
[详细文档](https://www.axios.com/)


## mongoose语法

| 名称 | 说明 |
|:----|:----|
|$or|或关系|
|$nor|或关系取反|
|$gt|大于|
|$gte|大于等于|
|$lt|小于|
|$lte|小于等于|
|$ne|不等于|
|$in|在多个值范围内|
|$nin|不在多个值范围内|
|$all|匹配数组中多个值|
|$regex|正则，用于模糊查询|
|$size|匹配数组大小|
|$maxDistance|范围查询，距离（基于LBS）|
|$mod|取模运算|
|$near|邻域查询，查询附近的位置（基于LBS）|
|$exists|字段是否存在|
|$elemMatch|匹配内数组内的元素|
|$within|范围查询（基于LBS）|
|$box|范围查询，矩形范围（基于LBS）|
|$center|范围醒询，圆形范围（基于LBS）|
|$centerSphere|范围查询，球形范围（基于LBS）|
|$slice|查询字段集合中的元素（比如从第几个之后，第N到第M个元素|


```js
// config.*.js
exports.mongo = {
  url: 'mongodb://localhost:27017/数据库',
  tables: {
    database: {
      age: Number,
      name: {
        type: String,
        unique: true
      }               
    }
  }
}

// 链接多个数据库
exports.mongo = {
  clients: {
    db1: {
      url: 'mongodb://localhost:27017/db1',
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
      url: 'mongodb://localhost:27017/db2',
      tables: {
        database: {
          age: Number,
          name: {
            type: String,
            unique: true
          }               
        }
      }
    }
  }
  
}
```
```js
// 查询数据
await ctx.db.database.find({ name: 'Nobita' }, [options]);

// 插入数据
await ctx.db.database.insert({ name: 'Nobita' });

// 插入多条数据
await ctx.db.database.insertMany([
  { name: 'Nobita' },
  { name: 'Koa' }
]);

// 修改数据
await ctx.db.database.update({ name: 'Nobita' }, { author: 'JJ' }, [options]);

// 删除数据
await ctx.db.database.remove({ name: 'Nobita' });

// 关联查询
await ctx.db.database.aggregate(data);

// 链接多数据库
// db1
await ctx.db.db1.database.find({ name: 'Nobita' });
// db2
await ctx.db.db2.database.find({ name: 'Nobita' });

```
### Schema
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


### find - [options]
- limit (number)： 默认为20。查询条数。
- page  (number)： 默认为0。查询页码。
- sort  (object)： 排序条件

### update - [options]
- safe (boolean)： 默认为true。安全模式。
- upsert (boolean)： 默认为false。如果不存在则创建新记录。
- multi (boolean)： 默认为false。是否更新多个查询记录。
- runValidators： 如果值为true，执行Validation验证。
- setDefaultsOnInsert： 如果upsert选项为true，在新建时插入文档定义的默认值。
- strict (boolean)： 以strict模式进行更新。
- overwrite (boolean)： 默认为false。禁用update-only模式，允许覆盖记录。

[详细文档](http://mongoosejs.com/docs/api.html)

## mysql
```js
//config.*.js
exports.mysql = {
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'database'
};

// 例子
await ctx.mysql.sql('SELECT * FROM table');
```
[详细文档](https://www.npmjs.com/package/mysql)

## session
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
```js
// 使用例子
ctx.session.name = 'Nobita';

// 删除
ctx.session.name = null;
```

## cookies
```js
// 使用例子
ctx.cookies.set('name', 'Nobita', [options]);

// 删除
ctx.session.get('name');
```
- [options]
- maxAge 一个数字表示从 Date.now() 得到的毫秒数
- signed cookie 签名值
- expires cookie 过期的 Date
- path cookie 路径, 默认是'/'
- domain cookie 域名
- secure 安全 cookie
- httpOnly 服务器可访问 cookie, 默认是 true
- overwrite 一个布尔值，表示是否覆盖以前设置的同名的 cookie (默认是 false). 如果是 true, 在同一个请求中设置相同名称的所有 Cookie（不管路径或域）是否在设置此Cookie 时从 Set-Cookie 标头中过滤掉。

## redis缓存
```js
// config.*.js
exports.redis = {
  port: 6379,          // Redis port
  host: '127.0.0.1',   // Redis host
  family: 4,           // 4 (IPv4) or 6 (IPv6)
  password: 'auth',
  db: 0
}

// 使用例子
ctx.redis.set('key', 'Nobita', [options]);

await ctx.redis.get('key');

ctx.redis.del('key');
```
[详细文档](https://github.com/luin/ioredis/blob/HEAD/API.md)


## 配置文件
```text
> config.default.js  // 通用配置
> config.local.js    // 本地开发配置
> config.prod.js     // 线上配置
```

> 端口监听
```js
// config.*.js
exports.listen = { 
  port: 6001,   // 端口
  callback() {  
    // 监听端口回调
  }
}
```

> 静态资源
```js
// config.*.js
exports.static = {
  path: path.join(__dirname, '../views/static'), // 静态资源路径
  pathPrefix: '/static' // 静态资源别名
}
```

> 中间件
```js
// config.*.js
exports.middleware = ['isLogin'], // 中间件名称

exports.isLogin: {
  match: /\/index/ // 路由匹配规则
}
```

> xss开启
```js
// config.*.js
exports.xss = true
```

## 进程守护(pm2)
[详细文档](http://pm2.keymetrics.io/)

## 热部署(nodemon)
[详细文档](https://github.com/remy/nodemon)