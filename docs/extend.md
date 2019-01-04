# Extend
---

## Context

- Context 指的是 Koa 的请求上下文，这是 请求级别 的对象，每次请求生成一个 Context 实例，通常我们也简写成 ctx。在所有的文档中，Context 和 ctx 都是指 Koa 的上下文对象。
- 框架会把 app/extend/context.js 中定义的对象与 Koa Context 的 prototype 对象进行合并，在处理请求时会基于扩展后的 prototype 生成 ctx 对象。

```js
// app/extend/context.js
module.exports = {
  foo(param) {
    // this 就是 ctx 对象，在其中可以调用 ctx 上的其他方法，或访问属性
  },
};


// app/controllers/user.js
module.exports = {
  async get() {
    const ctx = this;
    ctx.foo(); // 直接调用
  }
}
```
---

## Helper

- Helper 函数用来提供一些实用的 utility 函数。

```js
// app/extend/helper.js
module.exports = {
  sum(a, b) {
    // this 就是 ctx 对象，在其中可以调用 ctx 上的其他方法，或访问属性
    return a + b;
  },
};

// app/controllers/user.js
module.exports = {
  async get() {
    const ctx = this;
    ctx.helper.sum(1, 2); // 直接调用
  }
}
```
---

## Filter

- Filter 函数用来提供给模板使用的自定义过滤器。

```js
// app/extend/filter.js
module.exports = {
  foo(a, b) {
    // ...
  },
};
```

```html
<!-- index.html -->
<div>{{ 'hello' | foo('Nobita')}}</div>
```