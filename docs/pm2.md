# 进程守护
> Nobita 框架进程守护使用的是pm2，当然也能换其他的守护模块。

### pm2 配置
- run.json
```json
{
  "name"        : "demo",  
  "script"      : "app.js", 
  "cwd"         : "./",
  "instances"   : "max",
  "exec_mode"  : "cluster",
  "error_file"  : "./logs/app-err.log",  
  "out_file"    : "./logs/app-out.log", 
  "env": {
      "RUN_ENV": "prod"
  }
}
```

- name 应用名称
- script 应用入口
- cwd 项目路径
- instances 开启的进程数
- exec_mode 应用程序启动模式，这里设置的是cluster_mode（集群），默认是fork
- error_file：自定义应用程序的错误日志文件
- out_file：自定义应用程序日志文件
- env 运行环境

详情可看 pm2官网 查看配置