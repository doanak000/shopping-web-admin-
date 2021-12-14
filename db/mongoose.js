const mongoose = require("mongoose");
// mongoose.connect(
//   "mongodb+srv://admin:ptudw19@cluster0.hbgza.mongodb.net/Ogini-ShoppingCartWebsite?retryWrites=true&w=majority",
//   {
//     useNewUrlParser: true,
//   }
// );

async function connect() {
  try{
    await mongoose.connect("mongodb+srv://admin:ptudw19@cluster0.hbgza.mongodb.net/Ogini-ShoppingCartWebsite?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connect successfully");

  }
  catch (error){
    console.log("Failed to connect!");
  }
}

module.exports = { connect };
