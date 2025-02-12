import React, { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";
import DropdownMonth from "./dropdown";
import { Key, Trophy } from "lucide-react";
import axios from "axios";

const BarGraph = () => {
    const [data, setData] = useState([]);
    const [month, setMonth] = useState({ key: 1, label: "January" });

    const chartConfig = {
        products: {
            label: "Price",
        },
    };
    const getChartData = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/bar-data?month=${month.key}`);
            setData(response.data.message);
        } catch (error) {}
    };

    useEffect(() => {
        getChartData();
    }, []);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Transactions Bar stats</CardTitle>
                <CardDescription className="flex flex-row items-center justify-evenly mt-5">
                    <span>{month.label}</span>
                    <DropdownMonth setMonth={setMonth} />
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart
                        accessibilityLayer
                        data={data}
                        margin={{
                            top: 20,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey={data._id}
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            // tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                        <Bar dataKey="desktop" fill="#AABBCC" radius={8}>
                            <LabelList position="top" offset={12} className="fill-foreground" fontSize={12} />
                        </Bar>
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
};

export default BarGraph;
