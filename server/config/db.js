const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        mongoose.connect(process.env.DB_URI);
        console.log("Database Connected");
    } catch (error) {
        console.error("Error occured", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
