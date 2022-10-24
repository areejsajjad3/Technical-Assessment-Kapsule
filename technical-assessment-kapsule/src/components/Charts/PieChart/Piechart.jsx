import React from "react";
// import { PieChart, Pie, Tooltip} from "recharts";
import pieChartData from "./PiechartData";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJs, Tooltip , Title, ArcElement, Legend} from "chart.js";
import "./Piechart.css"
ChartJs.register (
    Tooltip, Title, ArcElement, Legend
)

const Piechart = () => {
   const data = {
        datasets: [{
            data: [10, 20, 30],
            backgroundColor:[
                'pink',
                'blue',
                'yellow'
            ]
        },
       ],    
        labels: [
            'Red',
            'Yellow',
            'Blue'
        ],
       
    };
     
    return (
       //using recharts
        // <PieChart width={400} height={400}>
        //     <Pie 
        //     dataKey="Patient_Age"
        //     isAnimationActive={true}
        //     data={pieChartData}
        //     cx={200}
        //     cy={75}
        //     outerRadius={60}
        //     fill= "#8884d8"
        //     label
        //     />
        //     <Tooltip/>
        // </PieChart>
        <div className="pie-chart">
        <Pie                   
                data={{                                          
                labels: [10, 40, 90, 56, 98, 34],
                datasets: [
                    {
                      label: 'Charges of patients',
                      data: [10,11,77,34, 20, 30],
                      backgroundColor: [
                        'rgba(204, 9, 71, 0.5)',
                        'rgba(119, 27, 103, 0.8)',
                        'rgba(23, 13, 219, 0.8)',
                        'rgba(253, 9, 9, 0.8)',
                        'rgba(238, 26, 135, 0.8)',
                        'rgba(186, 149, 20, 0.8)',                                      
                      ],
                      borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',                      
                      ],
                      borderWidth: 2,
                      offset: [20,0,0,0,0,0,0,0,0,0]                     
                    },
                  ],
            }}

            options={{                 
                responsive: true,         
                plugins:{
                    title:{
                        fontSize: 5,
                        text:'Patients Charges',
                        display: false ,
                        font:{ size:1}   
                    },
                    legend:{
                      labels:{
                        font:{size:5}
                      }
                    }                        
                 },                
               }}    
             />
             </div>
    )
}
export default Piechart;