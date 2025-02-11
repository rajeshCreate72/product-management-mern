const axios = require("axios");
const TransactionModel = require("../models/Transactions");

const initializeDatabase = async (req, res) => {
    try {
        const { data } = await axios.get("https://s3.amazonaws.com/roxiler.com/product_transaction.json");

        await TransactionModel.deleteMany();
        await TransactionModel.insertMany(data);

        res.status(200).json({ message: "Data Added" });
    } catch (error) {
        res.status(401).json({ message: "Data can't be fetched", error: error.message });
    }
};

module.exports = initializeDatabase;
