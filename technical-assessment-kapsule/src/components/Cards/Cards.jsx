import React from "react";
import "./Cards.css"
const Cards = (props) => {
    const {title, percentage, icon} = props.item
    return (
        <div>
            <div className="card">
                <div className="card-content">
                    <h4>{title}</h4>
                    <span>{percentage}</span>
                </div>
                <span className="card-icon">
                    <i class={icon}></i>
                </span>
            </div>
        </div>
    )
}
export default Cards;