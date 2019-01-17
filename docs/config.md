# Config
---

> 所有的 Config 文件都必须放在 config 目录下。默认需要 config.default.js | config.local.js | config.prod.js。

## 多环境配置

- 根据运行环境的不同，而读取不同的配置文件

| RUN_ENV | 说明 |
|:----|:----|
|default|全局配置|
|local|本地配置|
|prod|线上配置|

```
config
|- config.default.js
|- config.prod.js
|- config.local.js
```

- 我们可以通过 app.config.env 来区分环境。

```
RUN_ENV=local node app.js
```

## 配置写法
```js
// config.{env}.js
// 配置 listen 文件的目录，listen 为框架默认端口号
module.exports = {
  listen: {
    port: 6001, // 端口号
    callback() {
      // 启动成功
    }
  },
};
```

## 函数式引入
```js
// config.default.js
module.exports = app => {
  // ...app
  return {
    a:1
  }
};
```

## 合并规则
- 当指定 env 时会同时加载对应的配置文件，并覆盖默认配置文件的同名配置。如 prod 环境会加载 config.prod.js 和 config.default.js 文件，config.prod.js 会覆盖 config.default.js 的同名配置。

```js
// config.default.js
module.exports = {
  a: 1
};

// config.prod.js
module.exports = {
  a: 2
};

// app.config.a == 2
```

