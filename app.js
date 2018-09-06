const app = require('nobita');
const notfound = require('./app/middleware/notfound');
require('./app/router')(app);

app
.use(app.router.routes())
.use(notfound)
