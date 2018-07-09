module.exports = {
  listen: {
    port: 6001
  },

  mongoConf: {
    url: 'mongodb://localhost/dataApi',
    tables: 'abc'
  },


  logger: {
    path: './logs/',
    level: 'ALL'
  },
}