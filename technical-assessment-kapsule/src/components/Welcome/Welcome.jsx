import React from "react";
import kapsule from "../../assets/images/kapsule2.png";
import "./Welcome.css";
const Welcome = () =>
{
    <div className="welcome-container">
        <div className="welcome-title">
            <img src={kapsule} alt="welcome-img" />
            <div className="msg">
                <h1>Hello Admin</h1>
                <p>Welcome to the admin dashboard</p>
            </div>
        </div>
    </div>  

}
export default Welcome