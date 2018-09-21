# ![avatar](https://api.iamtang.com/images/nobita.png)Nobita
![avatar](https://api.iamtang.com/images/bf47d0f9d72a6059be3961992234349b023bbad5.jpg)
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
│   ├── modal    
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

- app/modal 操作mongo数据库

- app/extend/helper.js 工具函数

- app/extend/context.js ctx函数扩展

- config/config.default.js 通用配置文件

- config/config.local.js 开发通用配置文件

- config/config.prod.js 线上通用配置文件

- view/** 前端目录

- logs/** 日志文件

## 项目部署
```text
$ npm install koa-auto -g
$ npm init
$ cd 项目名
$ npm install
$ npm run local  启动本地开发
$ npm run prod   启动线上命令
$ npm run stop   停止服务
```

## 内置对象
- server: 调用第三方api
- curl: http请求
- helper: 工具函数
- logger: 日志打印
- db: mongo数据库操作
- request: 获取到当前请求的 Request
- nunjucks: 模板引擎
- cache: 内部缓存


## 日志打印(log4js)
```text
ALL < TRACE < DEBUG < INFO < WARN < ERROR < FATAL < MARK < OFF
```
官网：https://github.com/log4js-node/log4js-node


## 前端模板(nunjucks)
官网：http://mozilla.github.io/nunjucks/cn/api.html

## mongoose语法
```text
|名称|说明|
|-|-|
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
```
官网：http://mongoosejs.com/docs/api.html

## 进程守护(pm2)
官网：http://pm2.keymetrics.io/

## http请求(axios)
官网：https://www.axios.com/

## 热部署(nodemon)
官网：https://github.com/remy/nodemon

## 配置文件
```text
> config.default.js  // 通用配置
> config.local.js    // 本地开发配置
> config.prod.js     // 线上配置

```

> 端口监听
```js
exports.listen = { 
  port: 6001,   // 端口
  callback() {  
    // 监听端口回调
  }
}
```
> 模板
```js
exports.temp = {
  ext: 'html',  // 模板后缀
  path: path.join(__dirname, '../views'),  // 模板路径
}
```
> 静态资源
```js
exports.static = {
  path: path.join(__dirname, '../views/static'), // 静态资源路径
  pathPrefix: '/static' // 静态资源别名
}
```
> mongodb（Schema）
```js
exports.mongoConf = {
  url: 'mongodb://localhost:27017/数据库',
  '表名': {
    user: {
      age: Number,
      name: {
        type: String,
        unique: true
      }               
    }
  }
}
```
> 中间件
```js
exports.middleware = ['isLogin'], // 中间件名称

exports.isLogin: {
  match: /\/index/ // 路由匹配规则
}
```
> log日志
```js
exports.logger = {
  path: './logs/', // 日志位置
  level: 'off'     // 日志打印等级 | ALL < TRACE < DEBUG < INFO < WARN < ERROR < FATAL < MARK < OFF
}
```

> session
```js
exports.session = {
  keys: [key],
  key: 'NOBITA_SESSION', //cookie key (default is koa:sess)
  maxAge: (86400000 * 7), // cookie的过期时间 maxAge in ms (default is 1 days)
  overwrite: true, //是否可以overwrite    (默认default true)
  httpOnly: true, //cookie是否只有服务器端可以访问 httpOnly or not (default true)
  signed: true, //签名默认true
  rolling: false, //在每次请求时强行设置cookie，这将重置cookie过期时间（默认：false）
  renew: false, //(boolean) renew session when session is nearly expired
  
```


> xss开启
```js
exports.xss = true
```