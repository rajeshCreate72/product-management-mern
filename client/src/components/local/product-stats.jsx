import axios from "axios";
import React, { useEffect, useState } from "react";
import DropdownMonth from "./dropdown";

const ProductStats = () => {
    const [data, setData] = useState({});
    const [month, setMonth] = useState({ key: 1, label: "January" });

    const getProductStats = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/statistics?month=${month.key}`);
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProductStats();
    }, []);
    return (
        <div>
            <div className="flex flex-row items-center justify-evenly">
                <h3>Statistics {month.label}</h3>
                <DropdownMonth setMonth={setMonth} />
            </div>
            <div>
                <h4>
                    Total sale: <span>{data.amount}</span>
                </h4>
                <h4>
                    Total sold items: <span>{data.soldItems}</span>
                </h4>
                <h4>
                    Total unsold items: <span>{data.unsoldItems}</span>
                </h4>
            </div>
        </div>
    );
};

export default ProductStats;
