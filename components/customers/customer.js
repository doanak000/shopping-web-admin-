var express = require('express');
var router = express.Router();

/* GET customer page. */
router.get('/', function(req, res, next) {
  res.render('../components/customers/customer');
});

module.exports = router;
