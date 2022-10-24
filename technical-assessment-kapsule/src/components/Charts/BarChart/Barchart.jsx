import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis,Tooltip, CartesianGrid } from "recharts";
import barChartData from "./BarchartData";

const Barchart = () => {
    return (
        <ResponsiveContainer width="100%" aspect={2}>
            <BarChart data={barChartData} width={300} height={900} 
             margin={{
                top:5,
                right:30,
                left: 20,
                bottom:5 ,
            }}>
                <XAxis dataKey="Patient_Name" tick={{stroke:"#000"}}  />
                <YAxis />
                <Tooltip />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="Patient_Age" fill="#82ca9d" barSize={30}/>
            </BarChart>
        </ResponsiveContainer>
    )
}
export default Barchart;