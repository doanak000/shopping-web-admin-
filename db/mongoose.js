const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://admin:ptudw19@cluster0.hbgza.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);
