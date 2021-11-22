const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const itemSchema = new Schema({
    Name: String,
    Quantity: int,
    Price: int,
    Image: String
}, {timestamps: true} )

const items = mongoose.model('Items',itemSchema);
module.exports = items;