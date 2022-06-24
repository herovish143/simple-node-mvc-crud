const mongoose = require("mongoose");
const Schema = mongoose.Schema;


let productSchema = new Schema({
    name: { type: String, required: true, max: 100 },
    price: { type: Number, required: true },
});

const Product = new mongoose.model('Product', productSchema);

module.exports = Product;