var express = require('express');
var router = express.Router();

/* GET reset password page. */
router.get('/', function(req, res, next) {
  res.render('resetPassword', {layout: false});
});

module.exports = router;
