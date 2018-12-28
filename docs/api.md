# 基础功能
---
## Controllers
> 所有的 Controller 文件都必须放在 app/controller 目录下，可以支持多级目录，访问的时候可以通过目录名级联访问。

```js
// app/controllers/index.js
module.exports = {
  async getName () {
    const ctx = this;
    ctx.body = 'Hello Nobita!';
  }
}
```

然后我们可以使用 Router 来指向我们建立的 getName 。对象里面的每一个 Controller 都能再 Router 引用，根据文件名和方法定位。

```js
// app/controllers/index.js
module.exports = app => {
  app.router.get('/', app.controllers.index.getName);
```

Controllers 支持多级目录，例如如果我们将上面的 Controller 代码放到 app/controllers/api/index.js 中，则可以在 router 中这样使用：
```js
// app/controllers/api/index.js
module.exports = app => {
  app.router.get('/', app.controllers.api.index.getName);
```
注意事项：
- 一个 Controllers 文件只能包含一个对象， 这个对象需要通过 module.exports 的方式返回。

---

## Service
Service 主要用与复杂业务场景下用于做业务逻辑封装的一个抽象层：
- 减少 Controllers 中的逻辑代码
- 保持业务逻辑的独立性，抽象出来的 Service 可以被多个 Controller 重复调用。
- 将逻辑和展现分离。

> Service 文件必须放在 app/service 目录，与 Controllers 类似，可以支持多级目录，访问的时候可以通过目录名级联访问。

```
app/service/api/user.js => ctx.service.api.user
app/service/test_a.js => ctx.service.test_a
app/service/test_b.js => ctx.service.test_b
```

```js
// app/service/test.js
module.exports = ctx => { 
  return {
    async getName() {
      // ...
    }
  }
}
```
注意事项：
- 一个 Service 文件只能包含一个函数， 这个函数需要通过 module.exports 的方式返回。
- 该 Service 可以通过入参获取ctx对象。

---

## Router

Router 主要用来描述请求 URL 和具体承担执行动作的 Controllers 的对应关系， 框架约定了 app/router.js 文件用于统一所有路由入口。

- 在 app/router.js 里面定义路由规则。
```js
// app/router.js
module.exports = app => {
  const { router, controllers } = app;
  router.get('/detail/:id', controllers.detail.get);
};
```
- app/controllers/detail.js 下实现Controller
```js
// app/controller/detail.js
module.exports = {
  async get () {
    const ctx = this;
    const { id } = ctx.params;
    // ...
    ctx.body = `id = ${id}`;
  }
}
```

当用户访问 <font color=#e96900>${host}/detail/233</font> 的时候，就会执行 detail 里面的
get 方法。

Router 有以下类型：
 - router.all - 所有类型
 - router.get - GET
 - router.post - POST
 - router.put - PUT
 - router.del - DELETE

举例说明：
```js
// app/router.js
module.exports = app => {
  const { router, controller } = app;
  router.get('/home', controller.home);
  router.post('/user/:id', controller.user.get);
  router.put('/admin', controller.admin);
  router.del('/user', controller.user.get);
  router.all('/api/v1/comments', controller.v1.comments.get);
};
```

---
## 获取Router参数

Query String 方式
```js
// app/router.js
module.exports = app => {
  app.router.get('/search', app.controller.search.index);
};

// app/controller/search.js
exports.index = async ctx => {
  ctx.body = `search: ${ctx.query.name}`;
};

// curl http://127.0.0.1:7001/search?name=Nobita
```

表单内容的获取
```js
// app/router.js
module.exports = app => {
  app.router.get('/detail/:id', app.controller.package.detail);
};

// app/controller/package.js
exports.detail = async ctx => {
  ctx.body = `package:${ctx.params.id}`;
};

// curl http://127.0.0.1:7001/detail/2333
```

参数命名方式
```js
// app/router.js
module.exports = app => {
  app.router.post('/form', app.controller.form.post);
};

// app/controller/form.js
exports.post = async ctx => {
  const { name } = ctx.request.body;
  ctx.body = `name: ${name}`;
};

// 模拟发起 post 请求。
// curl -X POST http://127.0.0.1:7001/form --data '{"name":"Nobita"}' --header 'Content-Type:application/json'
```
---

## Middleware
> 因为 Nobita 是基于 Koa 而诞生的，所以 Nobita 的中间件也是跟 Koa 的形式一样，都是洋葱圈模式。每多一个中间件就会多一层“洋葱皮”。

- 所有的 Middleware 文件都必须放在 app/Middleware 目录下。

```js
// app/middleware/isLogin.js
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

- 中间件编写完成后，我们还需要手动挂载。

```js
// config/config.*.js
exports.middleware = ['isLogin', ...], // 中间件名称

exports.isLogin: {
  match: /\/index/ // 路由匹配规则
  ignore: /\/index/  // 除外，ignore和match同时存在，优先ignore
}
```

- middleware 的顺序决定了中间件的运行顺序
