var express = require('express');
var router  = express.Router();

router.get('/:id?', require('./services/find'));
router.put('/:id', require('./services/update'));
router.patch('/:id', require('./services/update'));
router.delete('/:id', require('./services/remove'));
router.post('/', require('./services/create'));

module.exports = router;
