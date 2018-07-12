module.exports = {
  listen: {
    port: 6001,
    callback() {
      console.log('http://localhost:6001');
    }
  },

  logger: {
    path: './logs/',
    level: 'off'
  },
}