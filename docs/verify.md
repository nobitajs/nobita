# 验证和序列化
> 路由的验证是依赖 [Ajv](https://github.com/epoberezkin/ajv/blob/master/README.md) 与 [fast-json-stringify](https://github.com/epoberezkin/ajv/blob/master/README.md) 实现的。


- body：当请求方法为 POST 或 PUT 时，验证请求主体。
- querystring 或 query：验证查询字符串。可以是一个完整的 JSON Schema 对象 (包括值为 object 的 type 属性以及包含参数的 properties 对象)，也可以是一个只带有查询参数 (无 type 与 properties 对象) 的简单对象 (见下文示例)。
- headers：验证请求头部 (request headers)
- response 返回结果验证

例子：
```js

module.exports = app => {
  const schema = {
    query: {
      type: 'object',
      properties: {
        name: { type: 'string' },
      }
    },
    response: {
      type: 'object',
      required: ['code', 'data'],
      properties: {
        code: { type: 'number' },
        data: {
          properties: {
            name: { type: 'string' },
            age: { type: 'string' }
          }
        },
        msg: { type: 'string' }
      }
    }
  };
  app.router.get('/', schema, app.controllers.index.index);
};
```