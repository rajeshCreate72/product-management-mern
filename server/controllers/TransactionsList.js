const axios = require("axios");
const TransactionModel = require("../models/Transactions");

const listAllTransactions = async (req, res) => {
    try {
        const { search = "", limit = 10, page = 1, month } = req.query;
        const monthNumber = parseInt(month);
        let filter = {};
        if (search) {
            filter = {
                $match: { $expr: { $eq: [{ $month: "$dateOfSale" }, monthNumber] } },
                $or: [
                    { title: { $regex: search, $options: "i" } },
                    { description: { $regex: search, $options: "i" } },
                    { category: { $regex: search, $options: "i" } },
                ],
            };
        }

        const transactions = await TransactionModel.aggregate(filter)
            .limit(limit)
            .skip((parseInt(page) - 1) * parseInt(limit));
        res.json(transactions);
    } catch (error) {
        res.json({ message: "Error fetching transactions" });
    }
};

const getProductStats = async (req, res) => {
    const { month } = req.query;
    const monthNumber = parseInt(month);

    try {
        const result = await TransactionModel.aggregate([
            { $match: { $expr: { $eq: [{ $month: "$dateOfSale" }, monthNumber] } } },
            {
                $facet: {
                    totalAmount: [{ $group: { _id: null, amount: { $sum: "$price" } } }],
                    soldItems: [{ $match: { sold: true } }, { $count: "totalSold" }],
                    unsoldItems: [{ $match: { sold: false } }, { $count: "totalUnsold" }],
                },
            },
        ]);

        res.json({
            amount: result[0].totalAmount[0].amount,
            soldItems: result[0].soldItems[0].totalSold,
            unsoldItems: result[0].unsoldItems[0].totalUnsold,
        });
    } catch (error) {
        res.json({ message: "Error fetching statastics" });
        console.log(error);
    }
};

const getBarGraphData = async (req, res) => {
    const { month } = req.query;
    const monthNumber = parseInt(month);

    try {
        const priceDistribution = await TransactionModel.aggregate([
            {
                $match: { $expr: { $eq: [{ $month: "$dateOfSale" }, monthNumber] } },
            },
            {
                $bucket: {
                    groupBy: "$price",
                    boundaries: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900],
                    default: "900+",
                    output: { count: { $sum: 1 } },
                },
            },
        ]);

        res.json({ message: priceDistribution });
    } catch (error) {
        res.json({ message: "Error fetching price distribution", error });
    }
};

const getPieChartData = async (req, res) => {
    const { month } = req.query;
    const monthNumber = parseInt(month);

    try {
        const pieChart = await TransactionModel.aggregate([
            { $match: { $expr: { $eq: [{ $month: "$dateOfSale" }, monthNumber] } } },
            {
                $group: { _id: "$category", count: { $sum: 1 } },
            },
        ]);

        res.json({ message: pieChart });
    } catch (error) {
        res.json({ message: "Error fetching pie chart" });
    }
};

module.exports = { listAllTransactions, getProductStats, getBarGraphData, getPieChartData };
