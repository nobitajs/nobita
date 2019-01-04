# Nunjucks
---

## Nunjucks 配置
```js
// config.{env}.js
exports.temp = {
  path: './views/' // 设置模板目录
  option: {} // 参数
}
```

- autoescape (默认值: true) 控制输出是否被转义，查看 [Autoescaping](https://nunjucks.bootcss.com/api.html#autoescaping)
- throwOnUndefined (default: false) 当输出为 null 或 undefined 会抛出异常
- trimBlocks (default: false) 自动去除 block/tag 后面的换行符
- lstripBlocks (default: false) 自动去除 block/tag 签名的空格
- watch (默认值: false) 当模板变化时重新加载。使用前请确保已安装可选依赖 chokidar。
- noCache (default: false) 不使用缓存，每次都重新编译
- web 浏览器模块的配置项
  - useCache (default: false) 是否使用缓存，否则会重新请求下载模板
  - async (default: false) 是否使用 ajax 异步下载模板
- express 传入 express 实例初始化模板设置
- tags: (默认值: see nunjucks syntax) 定义模板语法，查看 [Customizing Syntax](https://nunjucks.bootcss.com/api.html#customizing-syntax)


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