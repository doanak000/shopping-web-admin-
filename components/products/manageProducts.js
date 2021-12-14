var express = require('express');
var router = express.Router();

/* GET manageProducts page. */
router.get('/', function(req, res, next) {
  res.render('../components/products/manageProducts');
});

module.exports = router;
