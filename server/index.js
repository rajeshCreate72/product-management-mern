const express = require("express");
const dotenv = require("dotenv");
const DatabaseConnection = require("./config/db");

const transactionsData = require("./routes/Transactions");

const app = express();

app.use(express.json());

dotenv.config();

DatabaseConnection();

app.use("/api", transactionsData);

const PORT = process.env.PORT;

app.listen(PORT || 8000, () => console.log("Server is running at localhost:8000"));
