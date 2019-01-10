# Logger
---

> 日志对于 Web 开发的重要性毋庸置疑，它对于监控应用的运行状态、问题排查等都有非常重要的意义。

## 日志配置
```js
// config.{env}.js
exports.logger = {
  path: './logs/', // 日志位置
  level: 'MARK'     // 设置日志打印等级
}
```

## 日志等级
> ALL < TRACE < DEBUG < INFO < WARN < ERROR < FATAL < MARK < OFF

```js
ctx.logger.trace('--trace--');
ctx.logger.debug('--debug--');
ctx.logger.info('--info--');
ctx.logger.warn('--warn--');
ctx.logger.error('--error--');
ctx.logger.fail('--fail--');
ctx.logger.mark('--mark--');
```

- 只有大于等于日志配置级别的信息才能输出出来.
- 举个例子: 我们把刚才的 config 的日志输级别修改为 MARK

```
[2018-12-29T14:00:09.930] [MARK] logs - --mark--
```