# Service
---

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