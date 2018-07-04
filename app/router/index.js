
const index = require('../controllers/index');

module.exports = app => {
  app.router.get('/index', index);
}