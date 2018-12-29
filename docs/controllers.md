# Controllers
---

> 所有的 Controller 文件都必须放在 app/controllers 目录下，可以支持多级目录，访问的时候可以通过目录名级联访问。

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
