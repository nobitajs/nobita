# Cookies
---

> 由于HTTP协议是无状态的，而服务器端的业务必须是要有状态的。Cookie诞生的最初目的是为了存储web中的状态信息，以方便服务器端使用。

## 设置 Cookies
```js
// app/controllers/user.js
module.exports = {
 async get() {
   const ctx = this;
   ctx.cookies.set('key', 'value', [option]);
   ...
 }
}
```
- [option]
- <font color=#e96900>maxAge</font> 一个数字表示从 Date.now() 得到的毫秒数
- <font color=#e96900>signed</font> cookie 签名值
- <font color=#e96900>expires</font> cookie 过期的 Date
- <font color=#e96900>path</font> cookie 路径, 默认是'/'
- <font color=#e96900>domain</font> cookie 域名
- <font color=#e96900>secure</font> 安全 cookie
- <font color=#e96900>httpOnly</font> 服务器可访问 cookie, 默认是 true
- <font color=#e96900>overwrite</font> 一个布尔值，表示是否覆盖以前设置的同名的 cookie (默认是 false). 如果是 true, 在同一个请求中设置相同名称的所有 Cookie（不管路径或域）是否在设置此Cookie 时从 Set-Cookie 标头中过滤掉。

## 读取 Cookies
```js
// app/controllers/user.js
module.exports = {
 async get() {
   const ctx = this;
   const key = ctx.cookies.get('key');
   ...
 }
}
```

## 删除 Cookies
```js
// app/controllers/user.js
module.exports = {
 async get() {
   const ctx = this;
   ctx.cookies.del('key');
   ...
 }
}
```