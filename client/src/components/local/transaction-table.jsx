import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "antd";

const TransactionTable = () => {
    const [data, setData] = useState([]);
    const columns = [
        {
            title: "Id",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Title",
            dataIndex: "title",
            key: "title",
        },
        {
            title: "Description",
            dataIndex: "description",
            key: "description",
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
        },
        {
            title: "Category",
            dataIndex: "category",
            key: "category",
        },
        {
            title: "Sold",
            dataIndex: "sold",
            key: "sold",
            render: (sold) => (sold ? "Yes" : "No"),
        },
        {
            title: "Image",
            dataIndex: "image",
            key: "image",
            render: (url) => (
                <img src={url} alt="Product" style={{ width: "50px", height: "50px", objectFit: "cover" }} />
            ),
        },
    ];

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:8000/api/list-transactions");
            console.log(response.data);
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <>
            <label>
                Search:
                <span>
                    <input className="m-10" type="search" />
                </span>
            </label>
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
