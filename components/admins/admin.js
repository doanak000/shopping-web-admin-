var express = require('express');
var router = express.Router();
const Account = require("../../models/account");

router.get('/', async (req, res) => {
  try {
    const admins = await Account.find({role: "admin"}).lean();
    console.log(admins)
    res.render('../components/admins/admin', { admins });
  } catch (e) {
    res.status(500).send();
  }
  });

module.exports = router;
