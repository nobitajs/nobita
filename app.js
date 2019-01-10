
const app = require('nobita');
const notfound = require('./app/middleware/notfound');

app.use(notfound)