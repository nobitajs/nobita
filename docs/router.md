# Router
---

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

---

## Router 类型
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