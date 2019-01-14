# 事件监听
---

> 框架中开发者可以监听这些事件做一些操作

## error
- 运行时有任何的异常都会触发 error 事件，将错误对象和关联的上下文（如果有）暴露给开发者，可以进行自定义的日志记录上报等处理。

```js
// app.js
app.on('error', (err, ctx) => {
  // ...
  ctx.logger.error('error', err.message);
})
```

## request
- 应用收到请求时，会触发 request 事件，并将当前请求上下文暴露出来，开发者可以监听事件来进行日志记录。

```js
// app.js
app.on('request', (err, ctx) => {
  // ...
})
```

## response
- 应用响应请求时，会触发 response 事件，并将当前请求上下文暴露出来，开发者可以监听事件来进行日志记录。

```js
// app.js
app.on('response', (err, ctx) => {
  // ...
})
```