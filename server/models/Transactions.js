const mongoose = require("mongoose");

const transctionSchema = new mongoose.Schema({
    id: {
        type: Number,
    },
    title: {
        type: String,
    },
    price: {
        type: Number,
    },
    description: {
        type: String,
    },
    category: {
        type: String,
    },
    image: {
        type: String,
    },
    sold: {
        type: Boolean,
    },
    dateOfSale: {
        type: Date,
    },
});

const TransactionModel = mongoose.model("product_transactions", transctionSchema);

module.exports = TransactionModel;
