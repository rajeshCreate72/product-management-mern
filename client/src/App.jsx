import "./App.css";
import BarGraph from "./components/local/bar-graph";
import ProductStats from "./components/local/product-stats";
import TransactionTable from "./components/local/transaction-table";

function App() {
    return (
        <>
            <TransactionTable />
            <ProductStats />
            <BarGraph />
        </>
    );
}

export default App;
