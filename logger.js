const config = require('./config/config.default');

const formatDateTime = is => {
  let date = new Date();
  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  let d = date.getDate();
  let h = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  m = m < 10 ? ('0' + m) : m;
  d = d < 10 ? ('0' + d) : d;
  h = h < 10 ? ('0' + h) : h;
  minute = minute < 10 ? ('0' + minute) : minute;
  second = second < 10 ? ('0' + second) : second;

  if (is) {
    return `${y}-${m}-${d}T${h}:${minute}:${second}`;
  } 
  
  return `${y}-${m}-${d}`;
}


const log4js = require('log4js');
log4js.configure({
  appenders: {
    file: {
      type: 'file',
      filename: `${config.logger.path}${formatDateTime()}.log`,//文件目录，当目录文件或文件夹不存在时，会自动创建
      // maxLogSize : 10,//文件最大存储空间，当文件内容超过文件存储空间会自动生成一个文件test.log.1的序列自增长的文件
      encoding: 'utf-8',//default "utf-8"，文件的编码
      category: '',
      // numBackups: 5, 
      compress: true,
      encoding: 'utf-8',
    },
    dateFile: {
      type: 'dateFile',
      filename: `${config.logger.path}logs.log`,
      pattern: 'yyyy-MM-dd-hh',
      compress: true
    },
    out: {
      type: 'stdout'
    }
  },
  categories: {
    default: { appenders: ['file', 'dateFile', 'out'], level: config.logger.level }
  }
});

module.exports = log4js.getLogger('logs');

