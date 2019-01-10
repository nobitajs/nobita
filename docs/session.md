# Session
---

> Session 是另一种记录客户状态的机制，不同的是Cookie保存在客户端浏览器中，而 Session 保存在服务器上，当浏览器访问服务器并发送第一次请求时，服务器端会创建一个 Session 对象，生成一个类似于key,value的键值对， 然后将key(cookie)返回到浏览器(客户)端，浏览器下次再访问时，携带key(cookie)，找到对应的 Session (value)。 客户的信息都保存在 Session 中。

## 配置 Session
```js
// config.{env}.js
exports.session: {
  keys: ['ab18ae83-2f8c-4959-801c-3fcd389b0320'],
  key: 'NOBITA_SESSION',
  maxAge: (86400000 * 7),
  overwrite: true, 
  httpOnly: true,
  signed: true,
  rolling: false,
  renew: false
},
```

- <font color=#e96900>keys</font> 设置签名密钥,
- <font color=#e96900>key</font> cookie key (default is koa:sess)
- <font color=#e96900>maxAge</font> cookie的过期时间 maxAge in ms (default is 1 days)
- <font color=#e96900>overwrite</font> 是否可以overwrite (默认default true)
- <font color=#e96900>httpOnly</font> cookie是否只有服务器端可以访问 httpOnly or not (default true)
- <font color=#e96900>signed</font> 签名默认true
- <font color=#e96900>rolling</font> 在每次请求时强行设置cookie，这将重置cookie过期时间（默认：false）
- <font color=#e96900>renew</font> (boolean) renew session when session is nearly expired

## 设置 Session
```js
// app/controllers/user.js
module.exports = {
 async get() {
   const ctx = this;
   ctx.session.key = 'value';
   ...
 }
}
```

## 读取 Session
```js
// app/controllers/user.js
module.exports = {
 async get() {
   const ctx = this;
   const value = ctx.session.key;
   ...
 }
}
```

## 删除 Session
```js
// app/controllers/user.js
module.exports = {
 async get() {
   const ctx = this;
   ctx.session = null
   ...
 }
}
```

## 特别注意
需要 特别注意 的是：设置 session 属性时需要避免以下几种情况（会造成字段丢失，详见 [koa-session](https://www.npmjs.com/package/koa-session) 源码）
- 不要以 _ 开头
- 不能为 isNew

```js
// ❌ 错误的用法
ctx.session._visited = 1;   //    --> 该字段会在下一次请求时丢失
ctx.session.isNew = 'HeHe'; //    --> 为内部关键字, 不应该去更改

// ✔️ 正确的用法
ctx.session.visited = 1;
```

## 扩展存储
Session 默认存储在 Cookie 中，但它有一些缺点：：
- 浏览器通常都有限制最大的 Cookie 长度，当设置的 Session 过大时，浏览器可能拒绝保存。
- Cookie 在每次请求时都会带上，当 Session 过大时，每次请求都要额外带上庞大的 Cookie 信息。

框架提供了将 Session 存储到除了 Cookie 之外的其他存储的扩展方案，我们只需要设置 sessionRedis: true 即可将 Session 存储到Redis当中。

```js
// config.{env}.js
exports.sessionRedis: true;
```
- 配置 sessionRedis 前，要先配置 Redis，不然会报错。 [如何配置 Redis](/redis?id=%E9%85%8D%E7%BD%AE-redis)

__注意：一旦选择了将 Session 存入到外部存储中，就意味着系统将强依赖于这个外部存储，当它挂了的时候，我们就完全无法使用 Session 相关的功能了。因此我们更推荐大家只将必要的信息存储在 Session 中，保持 Session 的精简并使用默认的 Cookie 存储，用户级别的缓存不要存储在 Session 中。__