var express = require('express');
var router = express.Router();

/* GET revenue page. */
router.get('/', function(req, res, next) {
  res.render('../components/revenue/revenue');
});

module.exports = router;
