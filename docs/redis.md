# Redis
> Redis 是一个开源的使用ANSI C语言编写、遵守BSD协议、支持网络、可基于内存亦可持久化的日志型、Key-Value数据库，并提供多种语言的API。

## 配置 Redis
```js
// config.*.js
exports.redis = {
  port: 6379,          // Redis port
  host: '127.0.0.1',   // Redis host
  family: 4,           // 4 (IPv4) or 6 (IPv6)
  password: 'auth',
  db: 0
}
```

## set
- 存储数据
```js
// app/controllers/test.js
module.exports = {
  async get() {
    const ctx = this;
    ctx.redis.set('key', 'Nobita', [...options]);
    ...
  }
}
```

set - [...options]
- EX
- 过期时间(秒)

## get
- 查询数据
```js
// app/controllers/test.js
module.exports = {
  async get() {
    const ctx = this;
    const res = await await ctx.redis.get('key');
    ctx.body = res;
  }
}
```

## del
- 删除数据
```js
// app/controllers/test.js
module.exports = {
  async get() {
    const ctx = this;
    ctx.redis.del('key');
    ...
  }
}
```
