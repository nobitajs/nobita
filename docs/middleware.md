# Middleware
---

> 因为 Nobita 是基于 Koa 而诞生的，所以 Nobita 的中间件也是跟 Koa 的形式一样，都是洋葱圈模式。每多一个中间件就会多一层“洋葱皮”。

- 所有的 Middleware 文件都必须放在 app/middlewares 目录下。

```js
// app/middlewares/isLogin.js
module.exports = async (ctx, next) => {
  const { token } = ctx.query;
  const isLogin = await isLogin(token);
  if (isLogin) {
    ...
  } else {
    ... 
  }
  await next();
}
```
## 配置引入
- 中间件编写完成后，我们还需要手动挂载。

```js
// config/config.*.js
exports.middlewares = ['isLogin', ...], // 中间件名称

exports.isLogin: {
  match: /\/index/ // 路由匹配规则
  ignore(ctx) {
    // ctx.. 
    // return ..
  }
}
```

- middlewares 的顺序决定了中间件的运行顺序。
- ignore 和 match 同时存在，优先ignore。
- 类型：正则、函数、字符串。

## 路由引入

```js
// app/router/*.js
module.exports = app => {
  const foo = app.middlewares.foo;
  app.router.get('/', foo, app.controllers.index.index);
};
```

- 可引入多个中间件，注意不要与配置__重复引入__导致冲突。