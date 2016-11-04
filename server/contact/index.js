var express = require('express');
var router  = express.Router();

router.post('/', require('./services/create'));

module.exports = router;
