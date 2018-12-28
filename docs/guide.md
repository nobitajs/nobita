# 快速开始

## Nobita 是什么
Nobita 是一个基于Koa而诞生的一款框架。
Nobita 是一个基于Koa而诞生的一款框架。
Nobita 是一个基于Koa而诞生的一款框架。
Nobita 是一个基于Koa而诞生的一款框架。
Nobita 是一个基于Koa而诞生的一款框架。
Nobita 是一个基于Koa而诞生的一款框架。
Nobita 是一个基于Koa而诞生的一款框架。
Nobita 是一个基于Koa而诞生的一款框架。
Nobita 是一个基于Koa而诞生的一款框架。
Nobita 是一个基于Koa而诞生的一款框架。
Nobita 是一个基于Koa而诞生的一款框架。
Nobita 是一个基于Koa而诞生的一款框架。
Nobita 是一个基于Koa而诞生的一款框架。
Nobita 是一个基于Koa而诞生的一款框架。
Nobita 是一个基于Koa而诞生的一款框架。
Nobita 是一个基于Koa而诞生的一款框架。

## 快速入门
本文将从实例的角度，一步步地搭建出一个 Nobita.js 应用，让你能快速的入门 Nobita.js。

#### 项目环境
- 操作系统：支持 macOS，Linux，Windows
- 运行环境：建议选择 LTS 版本，最低要求 8.x。
- 建议安装淘宝镜像

```
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
```
- 初始化项目

```
$ cnpm install nobita-cli -g
$ nobita-cli init
$ cd 项目名
$ cnpm install
```


## 启动项目
```
$ npm run local  启动本地开发
```

运行成功后，访问 [http://127.0.0.1:6001](http://127.0.0.1:6001)，看到页面显示“hello Nobita！”，就证明你成功了！

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

- app.js 项目入口

- app/router.js 路由入口

- app/router/** 子路由

- app/controller/** 对用户的请求参数进行处理

- app/service/** 调用第三方api

- app/middleware/*.js 中间件

- app/extend/helper.js 工具函数

- app/extend/context.js ctx函数扩展

- config/config.default.js 通用配置文件

- config/config.local.js 开发通用配置文件

- config/config.prod.js 线上通用配置文件

- view/** 前端目录