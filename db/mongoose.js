const mongoose = require("mongoose");

try {
  mongoose.connect(
    "mongodb+srv://admin:ptudw19@cluster0.hbgza.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    },
    () => console.log("connect sucess")
  );
} catch (e) {
  console.log("connect fail");
}
