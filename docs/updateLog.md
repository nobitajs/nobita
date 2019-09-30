
# 更新日志
---

- 如果发现新的问题无法解决， 欢迎提交 [Nobita issue](https://github.com/nobitajs/nobita/issues)
- 定期更新

## v0.9.38
  - 修复 sequelize 大小写问题。
  - 修复 mongo delete 方法。

## v0.9.37
  - 更新 service helper 加载方式。
  - 优化 定时任务 方式。
  - 修复不适用ns启动时引起的bug。
  - 增加 service、config 支持 async await 方式。
  - app 增加 cache 函数
  - 修复了一些问题。

## v0.9.29
  - 更新了 nobita-scripts 的启动命令。
  - 减少了内部读写文件次数。
  - 增加查询mongo集合列表。
  - 修复 insert 返回数组问题。
  - 捕抓log打印日志。
  - 更新 nobita-readdir 方式。

## v0.9.21
  - 增大body的限制大小。
  - 更新 nobita-mongo，增加删除集合（drop）。
  - 修复 nobita-scripts 后台运行生产环境问题。
  - 修复 定时任务 自定义环境导致不会执行问题。
  - 增加 redis 链接成功提示。

## v0.9.17
  - 减少 lodash 体积。
  - 修改 curl 方式。
  - findOne 方法增加filter
  - 新增 nobita-scripts。

## v0.9.10
  - 修复 nobita-mongo update/updateOne的params问题。
  - 增加 curl 出错时 data 字段。


## v0.9.9
  - nobita-mongo findOne 增加filter。
  - nobita-curl 修改错误返回值。
  - 增加版本号 version。
  - nobita-mongo 优化 update updateOne insert insert insertMany。
  - nobita-mongo 修复 removeOne 问题，更新了 removeOne 和 remove方法。

## v0.9.8
  - 修复 config middlewares合并问题。
  - 默认加载 nunjucks 模板。

## v0.9.7
  - mongo 更新变量名。
  - mongo findOne数据toObject()。

## v0.9.6
  - mongo find 增加 filter 字段。

## v0.9.5
  - 修复 mongo update时如果数据不存在生成的数据没有 createTime问题。
  - 更新了mongoose，增加了updateone，去除了 multi。
  - 修复 helper 非函数时数据丢失。

## v0.9.4
  - 增加手动执行定时器方法。[查看](/schedule?id=手动触发定时器方法)
  - 修复 mongo 密码登陆bug。

## v0.9.3
  - 修复中间件拦截了定时任务。

## v0.9.2
  - 修复过滤漏过滤大于号。
  - 优化了 nobita-require。
  - 解决框架内存泄露问题。 

## v0.9.0
  - 优化 curl 里的方法。
  - 优化 service、controllers 里的方法。
  - 增加中间件不存在的时候报错提示。

## v0.8.9
  - 修改 nobita-mongo promise改为async await方式。

## v0.8.8
  - 去冗余，删除不必要的加载。
  - 增加 ready.js 可启动完成前执行。

## v0.8.5
  - 修复 helper.js 不存在产生的bug。
  - 增加启东时判断 router 是否存在。
  - 增加 定时任务 启动异常抛出错误。

## v0.8.2
  - 修复 中间件 与 定时任务冲突bug。[#3](https://github.com/nobitajs/nobita/issues/3)

## v0.8.1
  - 更新 nobita 内部执行方式。

## v0.7.9
  - 修复 prod 环境打不出 logger 日志。
  - 增加 允许查看日志文件 [查看](/logger?id=允许查看日志文件)

## v0.7.7
  - nobita-curl 修复 headers 为空的错误。
  - 增加 定时任务 [查看](/schedule)

## v0.7.4
  - 修改 mysql 使用方式，引入 sequelize 插件。[查看](/mysql)
  - config.{env}.js 增加函数式调用。[查看](/config?id=函数式引入)

## v0.7.2
  - 修改文件路径 app/middleware 改为 app/middlewares，但也兼容 app/middleware。
  - app.middlewares 可读取所有中间件函数。
  - 增加路由引入对应的中间件。[查看](/middleware?id=路由引入)

## v0.6.9
  - 修改中间件加载方式，match、ignore增加传入方式。

## v0.6.7
  - 修复 error 错误输出捕抓逻辑。
  - 修复 logger 本地开发时报错。

## v0.6.6
  - 增加 catch 错误 UI。
  - 增加 favicon 网页小图标。

## v0.6.1
  - nobita-catch 返回 json 改改成返回 stack。
  - 增加 request 和 response 事件。

## v0.6.0
  - 增加插件 nobita-catch 异常处理，捕获 50x 错误。
  - 增加线上链接 _debug=1 即可输出错误信息。
