module.exports = {
  listen: {
    port: 3000
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