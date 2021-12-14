const bcrypt = require('bcryptjs');
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

const Account = require("../models/account")
const Item = require('../models/item')

passport.use(new LocalStrategy(
  async function(username, password, done) {
    try{
      const user = await Account.findOne({account: username}).lean();
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      const match = await verifyPassword(user, password);
      if (!match) {
        return done(null, false, { message: 'Incorrect password.' });
      }

      return done(null, user);
    }
    catch (err) {
      return done(err);
    }

  },
));

async function verifyPassword(user, password){
    return bcrypt.compare(password, user.password);
}

passport.serializeUser(function(user, done) {
  done(null, {account: user.account, name: user.name, sex: user.sex, address: user.address});
});

passport.deserializeUser(function(user, done) {
  return done(null, user);
});

module.exports = passport;