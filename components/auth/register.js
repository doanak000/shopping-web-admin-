var express = require('express');
var authController = require("./authController");
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('../components/auth/register');
});

router.post("/", authController.register);

module.exports = router;
