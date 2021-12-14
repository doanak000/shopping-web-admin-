var express = require('express');
var router = express.Router();
const passport = require('../../auth/passport');

/* GET logout page. */
router.get('/', function(req, res, next) {
  req.logout();
  res.redirect("/");
});

module.exports = router;
