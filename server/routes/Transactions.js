const express = require("express");
const router = express.Router();
const InitializeDatabase = require("../controllers/AddRawData");
const {
    listAllTransactions,
    getProductStats,
    getBarGraphData,
    getPieChartData,
} = require("../controllers/TransactionsList");

router.get("/initialize-database", InitializeDatabase);

router.get("/list-transactions", listAllTransactions);
router.get("/statistics", getProductStats);
router.get("/bar-data", getBarGraphData);
router.get("/pie-chart", getPieChartData);

module.exports = router;
