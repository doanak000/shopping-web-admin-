var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('../components/profile/profile');
});

module.exports = router;
