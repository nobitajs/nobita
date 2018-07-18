const Nunjucks = require('nunjucks');
const config = require('./config/config.default');
const nunjucks = new Nunjucks.Environment(new Nunjucks.FileSystemLoader(config.temp.path));
module.exports = nunjucks;