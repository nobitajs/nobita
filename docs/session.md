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
   ctx.session.key = null
   ...
 }
}
```