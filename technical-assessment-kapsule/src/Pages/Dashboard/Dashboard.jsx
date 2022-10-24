import React from "react";
import "./Dashboard.css"
import Cards from "../../components/Cards/Cards";
import Barchart from "../../components/Charts/BarChart/Barchart";
import Piechart from "../../components/Charts/PieChart/Piechart";
import { Pie } from "react-chartjs-2";
import ProgressCard from "../../components/ProgressCard/ProgressCard";
import kapsule from "../../assets/images/kapsule2.png";
import Linearprogress from "../../components/Linearprogress/Linearprogress";
import Welcome from "../../components/Welcome/Welcome";
import { card_one,card_two,card_three, card_four,card_five,card_six,card_seven,card_eight,card_nine,card_ten,card_eleven,card_twelve } from "./DashboardCards";
const Dashboard = () => 
{   
       
    return (
        <div className="dashboard">
            <div className="dashboard__wrapper">    
                <div className="welcome-container">
                    <div className="welcome-title">
                        <img src={kapsule} alt="welcome-img" />
                        <div className="msg">
                            <h1>Hello Admin</h1>
                            <p>Welcome to the admin dashboard</p>
                        </div>
                    </div>
                </div> 
                <div className="dashboard-cards">
                   <Cards item={card_one}/>
                   <Cards item={card_two}/>
                   <Cards item={card_three}/>
                   <Cards item={card_four}/>
                </div>

                <div className="charts-Data">
                    <div className="Bar-chart">
                        <h3 className="chart-Title">Patients Age </h3>
                        <Barchart />
                    </div>
                    <div className="Pie-chart" >
                        <h3 className="chart-Title">Patients Charges</h3>
                        <Piechart />
                    </div>
                </div>
                
                <div className="dashboard-progress-cards">          
                    <ProgressCard item={card_five} />
                    <ProgressCard item={card_six} />
                    <ProgressCard item={card_seven} />
                    <ProgressCard item={card_eight} />
                </div> 

                <div className="msg-target">
                   <h1>Target Section</h1>                    
                </div>

                <div className="dashboard-linear-progress-cards">          
                    <Linearprogress item={card_nine} />
                    <Linearprogress item={card_ten} />
                    <Linearprogress item={card_eleven} />
                    <Linearprogress item={card_twelve} />
                </div>                
            </div>
        </div>
  );
    
}

export default Dashboard;