# 进程守护
> Nobita 框架进程守护使用的是pm2，当然也能换其他的守护模块。

### pm2 配置
- run.json
```json
{
  "name"        : "demo",  
  "script"      : "app.js", 
  "cwd"         : "./",  
  "error_file" : "./logs/app-err.log",  
  "out_file"   : "./logs/app-out.log", 
  "env": {
      "RUN_ENV": "prod"
  }
}
```

详情可看 pm2官网 查看配置