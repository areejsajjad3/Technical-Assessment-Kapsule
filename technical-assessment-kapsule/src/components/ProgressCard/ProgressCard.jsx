import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { FaBold } from "react-icons/fa";
import "./ProgressCard.css"

const ProgressCard = (props) => {
    const {title, percentage, amount} = props.item
    return (
        <div>
            <div className="progress-card">
                <div className="card-content">
                    <h4>{title}</h4>
                    <span>{amount}</span>
                </div>
                <div className="circular-progress-bar">
                    <CircularProgressbar 
                     value={percentage}
                     text= {`${percentage}%`}
                     styles={buildStyles({
                        pathColor: "#bd34eb",
                        textColor: "#000",
                        fontWeight: "bold",
                        trailColor: "#0b0c28",
                        backgroundColor: "#01d293",
                        textSize: '19px',
                        textAlign: 'center',
                        
                     })}
                    />
                    
                </div>
            </div>         
        </div>
    )
}
export default ProgressCard;