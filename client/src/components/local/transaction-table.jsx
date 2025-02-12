import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "antd";
import DropdownMonth from "./dropdown";

const TransactionTable = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [month, setMonth] = useState({ key: 1, label: "January" });

    const columns = [
        {
            title: "Id",
            dataIndex: "id",
            key: 1,
        },
        {
            title: "Title",
            dataIndex: "title",
            key: 2,
        },
        {
            title: "Description",
            dataIndex: "description",
            key: 3,
        },
        {
            title: "Price",
            dataIndex: "price",
            key: 4,
        },
        {
            title: "Category",
            dataIndex: "category",
            key: 5,
        },
        {
            title: "Sold",
            dataIndex: "sold",
            key: 6,
            render: (sold) => (sold ? "Yes" : "No"),
        },
        {
            title: "Image",
            dataIndex: "image",
            key: 7,
            render: (url) => (
                <img src={url} alt="Product" style={{ width: "50px", height: "50px", objectFit: "cover" }} />
            ),
        },
    ];

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `http://localhost:8000/api/list-transactions?month=${month.key}&search=${search}`
            );
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [search, setSearch, month]);
    return (
        <>
            <div className="flex flex-row justify-between items-center">
                <label>
                    Search:
                    <span>
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="m-5 border border-blue rounded-lg h-10 p-2"
                            type="search"
                        />
                    </span>
                </label>
                <DropdownMonth setMonth={setMonth} />
            </div>
            <Table
                columns={columns}
                dataSource={data}
                pagination={{
                    showSizeChanger: true,
                    pageSizeOptions: ["5", "10", "20", "50"],
                    defaultPageSize: 10,
                }}
            />
        </>
    );
};

export default TransactionTable;
