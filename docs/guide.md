# 快速开始
---
## Nobita 是什么
> Nobita 是基于Koa而诞生的一款简洁、开源的Node框架，对其进行了简洁的封装和可灵活扩展的机制，以至于能快速，稳定地编写服务端应用程序。

---

## 快速入门
本文将从实例的角度，一步步地搭建出一个 Nobita.js 应用，让你能快速的入门 Nobita.js。

#### 项目环境
- 操作系统：支持 macOS，Linux，Windows
- 运行环境：建议选择 LTS 版本，最低要求 8.x。
- 建议安装淘宝镜像

```
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
```
- 建议使用脚手架 nobita-cli 初始化项目

```
$ cnpm install nobita-cli -g
$ nobita-cli init
$ cd 项目名
$ cnpm install
```

---

## 启动项目
```
$ npm run local  启动本地开发
```

运行成功后，访问 [http://127.0.0.1:6001](http://127.0.0.1:6001)，看到页面显示“hello Nobita！”，就证明你成功了！

---

## 目录结构
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

#### 目录结构约定

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