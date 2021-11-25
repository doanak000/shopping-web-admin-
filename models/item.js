const mongoose = require("mongoose");

const Item = mongoose.model("Item", {
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  item: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = Task;
