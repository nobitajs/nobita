# 定时任务
---

> Nobita 提供了一套机制来让定时任务的编写和维护更加优雅。

- 所有的定时任务都统一存放在 app/schedule 目录下，每一个文件都是一个独立的定时任务。

## 编写任务
```js
// app/schedule/test.js
module.exports = {
  schedule: {
    cron: '*/2 * * * * *', // 2秒间隔
    type: 'worker', // 指定所有的 worker 都需要执行
  },
  async task(ctx) {
    // 定时执行函数
    // ...
  },
};
```

- cron 为设置为执行时间，将会按照 cron 表达式在特定的时间点执行。
- type 默认为 'worker' 
  - worker 只有一个 worker 会执行这个定时任务,
  - all 每个 worker 都会执行这个定时任务。
- task 的入参为 ctx，匿名的 Context 实例，可以通过它调用 service 等。


```
*    *    *    *    *    *
┬    ┬    ┬    ┬    ┬    ┬
│    │    │    │    │    |
│    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
│    │    │    │    └───── month (1 - 12)
│    │    │    └────────── day of month (1 - 31)
│    │    └─────────────── hour (0 - 23)
│    └──────────────────── minute (0 - 59)
└───────────────────────── second (0 - 59, optional)
```

```js
module.exports = {
  schedule: {
    // 每三小时准点执行一次
    cron: '0 0 */3 * * *',
  },
};
```