# 本地开发
> Nobita 框架热更新的是nodemon，当然也能换其他的热更新模块。

### pm2 配置
- nodemon.json
```json
{
  "restartable": "rs",
  "ignore": [
    ".git",
    "node_modules",
    ".vscode",
    "logs",
    "*.json"
  ],
  "verbose": true,
  "execMap": {
    "js": "node --harmony"
  },
  "env": {
    "RUN_ENV": "local"
  },
  "ext": "js,json"
}
```

详情可看 nodemon官网 查看配置