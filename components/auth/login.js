var express = require('express');
var router = express.Router();
const passport = require('../../auth/passport');

/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('../components/auth/login', { wrong: req.query.wrong != undefined, layout: false });
});

router.post('/', 
    passport.authenticate('local', {
      successRedirect: '/customer',
      failureRedirect: '/login?wrong',
    }),
    function (req, res, next){
      if(req.user){
        res.redirect('/');
      }
      else{
        res.redirect('/login');
      }
    }
);

module.exports = router;
