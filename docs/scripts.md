# 进程守护
> Nobita 框架进程守护使用的是 nobita-scripts，当然也能换其他的守护模块。

### Master进程
Master 进程负责管理所有的 Worker进程， 不运行任何的业务代码，启动、守护 Worker 进程，避免 Worker 进程报错而退出，且负责 Worker 进程之间的通讯。

### Worker进程
Worker 进程是负责真正的业务代码。

## nobita-scripts 配置
- package.json
```
{
  ...
  "scripts": {
    "prod": "nobita-scripts prod ./app.js -i 2 --silent false -n demo",
    "stop": "nobita-scripts stop demo",
  },
  ...
}
```

- prod \[app.js\](启动应用)
  - -i [value] 进程数
  - -e [value] 运行环境
  - -n [value] 应用名称
  - --silent [boolean] 是否输出到控制台


- stop \[name\](停止应用)
  - -n [value] 应用名称

## 进程间通讯

> JavaScript 代码是单线程的，所以 Node.js 一个进程最多就只能运行在一个CPU上。如果要用到多个CPU，那就要使用到 Cluster 模块。那进程之间就需要通讯。

- 监听消息

```js
process.messenger.on(action, (data) => {
  // ...
  console.log(data);
});
```

- 发送消息

```js
process.messenger.send({
  type: '发送方式',
  action: '消息类型', 
  data: '消息内容',
  toPid: '', // type: 'sendTo'时才需要
});
```

- type: 
 - broadcast 广播
 - sendToApp 发送给除了自己的所有进程
 - sendRandom 随机发给一个进程
 - sendTo 发给指定进程


## 自定义 Master 进程
```js
// master.js
module.exports = (cluster) =>{
  // ...
};
```