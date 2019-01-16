# 异常处理
---

> 得益于框架支持的异步编程模型，错误完全可以用 try catch 来捕获。在编写应用代码时，所有地方都可以直接用 try catch 来捕获异常。

```js
// app/controllers/test.js
module.exports = {
  async index (ctx) {
    try{
      // ...
    } catch(err){
      // ...
      throw new Error('response status is not 200');
    }
  }
}

```

__为了保证异常可追踪，必须保证所有抛出的异常都是 Error 类型，因为只有 Error 类型才会带上堆栈信息，定位到问题。__

## 捕获404
框架并不会将服务端返回的 404 状态当做异常来处理，但是框架提供了当响应为 404 且没有返回 body 时的默认响应

```js
// app/middleware/notfound.js
module.exports = async (ctx, next) => {
  await next();
  if (ctx.response.status == 404) {
    //...
  }
};
```
- 在配置中引入中间件：
```js
// config/config.${env}.js
module.exports = {
  middleware: [ 'notfound' ],
};
```

## 捕获50x
框架监听 error 事件，能获取到框架所有的错误信息。
```js
// app.js
app.on('error', (err, ctx) => {
  // ...
  ctx.logger.error('error', err.message);
})
```
- 配置了 errorPageUrl 时，一旦用户请求线上应用的 HTML 页面异常，就会重定向到这个地址。
- 若想线上环境查看报错原因，就在 url 添加 _debug=true 即可。

```js
// config/config.${emv}.js
module.exports = {
  // 线上页面发生异常时，重定向到这个页面上
  errorPageUrl: '/50x.html'
};
```