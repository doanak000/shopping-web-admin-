//This file is only used to store code
//Mongoose(to install: npm install mongoose):
const mongoose = require('mongoose');
const _schema = require('./models/schema')
//Connect to mongodb:
const dbURI = 'mongodb+srv://admin:ptudw19@cluster0.hbgza.mongodb.net/Ogini-ShoppingCartWebsite?retryWrites=true&w=majority';
mongoose.connect(dbURI)
    .then((result) =>console.log("Connected to database"))
    .catch((err)=>console.log(err));
main.get('/add-item',(req,res)=>{
    const item = new _scheme({
        name:'Vegetable',
        Quantity: 69,
        Price: 60000
    });

    item.save()
        .then((result) =>{
            res.send(result)
        })
        .catch((err)=>{
            console.log(err)
        } );
})
