const mongoose = require("mongoose");

const Account = mongoose.model("User", {
  name: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
  },
  role: {
    type: String,
  },
  address: {
    type: String,
    required: true,
  },
  account: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
});

module.exports = Account;

