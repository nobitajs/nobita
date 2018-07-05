module.exports = {
  listen: {
    port: 3000,
    callback() {
      console.log('http://localhost:3000');
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