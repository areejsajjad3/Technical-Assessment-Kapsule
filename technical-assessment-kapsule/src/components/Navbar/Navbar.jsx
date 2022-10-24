import React from "react";
import { Link } from "react-router-dom";
import profileImg from "../../assets/images/Profile.png";
import "./Navbar.css";
import {FaTh, FaUserAlt, FaGrin, FaHatWizard, FaRegChartBar ,FaBars, FaBarcode } from "react-icons/fa";
const Navbar = ({sidebarOpen, openSidebar}) => 
{
    return (
      
         <nav className="navbar">
            <div className="nav_icon" onClick={openSidebar}>
             <i class="ri-align-justify"></i>
            </div>

            <div className="navbar-left">
            <h3 className="logo"> <i class="ri-capsule-fill"></i> Kapsule </h3>
            </div>

            <div className="navbar-right">
               <i class="ri-search-line"></i>
              <span className="notification">
               <i class="ri-notification-3-line"></i>
               <span className="badge">4</span>
             </span>
              <Link to="/settings" className="profile">
                 <img src={profileImg} alt="profile-image" />
              </Link>
            </div>        
         </nav>
    )
}

export default Navbar;