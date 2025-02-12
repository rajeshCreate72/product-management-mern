# 🛍️ Product Management MERN

## 📁 Project Structure

The project is divided into the following directories:

-   **server/**: Contains the backend API developed with **Node.js and Express**.
-   **models/**: Defines MongoDB schemas for products and transactions.
-   **routes/**: Manages API endpoints for product data and statistics.
-   **controllers/**: Implements the logic for handling product-related operations.
-   **config/**: Stores database configurations.

---

## 🛠️ API Endpoints

-   **\`GET /api/initialize-database\`** → Initializes the database with sample data.
-   **\`GET /api/list-transactions\`** → Fetches all product transactions.
-   **\`GET /api/statistics\`** → Retrieves product statistics.
-   **\`GET /api/bar-data\`** → Provides data for bar graph visualization.
-   **\`GET /api/pie-chart\`** → Returns data for pie chart visualization.

---

## 🔧 Setup Instructions

1. Clone the repository:
    ```bash
    git clone https://github.com/rajeshCreate72/product-management-mern.git
    cd product-management-mern
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file in the root directory and add:
    ```env
    DB_URI=your_mongodb_connection_string
    ```
4. Start the server:
    ```bash
    npm start
    ```

---

## 🚀 Technologies Used

-   **Node.js** - Backend runtime environment
-   **Express.js** - Web framework for Node.js
-   **MongoDB** - NoSQL database
-   **Mongoose** - ODM for MongoDB
-   **Dotenv** - Environment variable management
