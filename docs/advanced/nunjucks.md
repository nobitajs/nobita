# Nunjucks
---

## Nunjucks 配置
```js
// config.{env}.js
exports.temp = {
  path: './views/' // 设置模板目录
}
```

## 渲染模板 
- render(template, data)
- template 模板文件，可多级目录
- data 模板数据

```js
// app/controllers/user.js
module.exports = {
 async get() {
   const ctx = this;
   const data = { 
     name: 'Nobita',
     age: 20
   }
   ctx.body = ctx.nunjucks.render('index.html', data);
 }
}
```

- 根据上述配置
```html
<!-- views/index.html -->
<div>name:{{name}}, age:{{age}}</div>
```


## 渲染字符串
- renderString(string, data)
- string 字符串
- data 模板数据

```js
// app/controllers/user.js
module.exports = {
 async get() {
   const ctx = this;
   const data = { 
     name: 'Nobita',
     age: 20
   }
   ctx.body = ctx.nunjucks.renderString('name: {{name}}, age: {{age}}', data);
 }
}
```

## 模板语法
可参数 [Nunjucks 官网](https://nunjucks.bootcss.com/api.html)