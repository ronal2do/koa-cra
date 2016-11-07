const koa         = require('koa');
const bodyParser  = require('koa-bodyparser');
const morgan      = require('morgan');
const mongoose    = require('mongoose');
const cors        = require('cors');
const validator   = require('koa-validator');
const path        = require('path');
// fire up koa
const app = koa();
// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
// middlewares
//app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//validator
app.use(validator());
// cors
app.use(cors());
// database
require('./db');
// add routes
require('./routes')(app);

// Serve static assets
app.use(koa.static(path.resolve(__dirname, '..', 'build')));
// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;
