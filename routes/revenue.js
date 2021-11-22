var express = require('express');
var router = express.Router();

/* GET revenue page. */
router.get('/', function(req, res, next) {
  res.render('revenue');
});

module.exports = router;
