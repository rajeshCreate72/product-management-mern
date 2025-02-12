const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const DatabaseConnection = require("./config/db");

const transactionsData = require("./routes/Transactions");

const app = express();

app.use(express.json());

app.use(cors({ origin: "http://localhost:5173" }));

dotenv.config();

DatabaseConnection();

app.use("/api", transactionsData);

const PORT = process.env.PORT;

app.listen(PORT || 8000, () => console.log("Server is running at localhost:8000"));
