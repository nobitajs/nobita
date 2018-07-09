module.exports = {
  listen: {
    port: 6001,
    callback() {
      console.log('http://localhost:6001');
    }
  },

  mongoConf: {
    url: 'mongodb://localhost:27017/dataApi',
    tables: 'abc'
  },

  logger: {
    path: './logs/',
    level: 'off'
  },
}