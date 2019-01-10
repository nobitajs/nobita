# 目录结构
```
koa
├── package.json
├── app.js         
├── nodemon.json 
├── app
|   ├── router.js 
│   |  
│   ├── router   
│   |  
│   ├── controller 
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

### 目录结构约定

- <font color=#e96900>app.js</font> 项目入口

- <font color=#e96900>app/router.js</font> 路由入口

- <font color=#e96900>app/router/**</font> 子路由

- <font color=#e96900>app/controller/**</font> 对用户的请求参数进行处理

- <font color=#e96900>app/service/**</font> 调用第三方api

- <font color=#e96900>app/middleware/*.js</font> 中间件

- <font color=#e96900>app/extend/helper.js</font> 工具函数

- <font color=#e96900>app/extend/context.js</font> ctx函数扩展

- <font color=#e96900>config/config.default.js</font> 通用配置文件

- <font color=#e96900>config/config.local.js</font> 开发通用配置文件

- <font color=#e96900>config/config.prod.js</font> 线上通用配置文件

- <font color=#e96900>view/**</font> 前端目录