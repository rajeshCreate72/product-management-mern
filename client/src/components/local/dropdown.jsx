import React, { useState } from "react";
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

const DropdownMonth = ({ setMonth }) => {
    const [month, setDropMonth] = useState({ key: "1", label: "January" });
    const items = [
        { key: "1", label: "January" },
        { key: "2", label: "February" },
        { key: "3", label: "March" },
        { key: "4", label: "April" },
        { key: "5", label: "May" },
        { key: "6", label: "June" },
        { key: "7", label: "July" },
        { key: "8", label: "August" },
        { key: "9", label: "September" },
        { key: "10", label: "October" },
        { key: "11", label: "November" },
        { key: "12", label: "December" },
    ];
    const handleMenuClick = (e) => {
        const selectedMonth = items.find((item) => item.key === e.key);
        setMonth(selectedMonth);
        setDropMonth(selectedMonth);
    };
    return (
        <Dropdown
            menu={{
                items,
                onClick: handleMenuClick,
            }}
        >
            <a
                onClick={(e) => {
                    e.preventDefault();
                }}
            >
                <Space>
                    {month ? month.label : "Select month"}
                    <DownOutlined />
                </Space>
            </a>
        </Dropdown>
    );
};

export default DropdownMonth;
