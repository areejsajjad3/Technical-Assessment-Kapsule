import React, {useState} from "react";
import {motion} from "framer-motion"
import { NavLink } from "react-router-dom";
import SidebarItems from "./SidebarItems";
import {FaTh, FaUserAlt, FaGrin, FaHatWizard, FaRegChartBar ,FaBars, FaBarcode } from "react-icons/fa";
import "./Sidebar.css";
import SidebarItem from "./SidebarItem";

const Sidebar = ({sidebarOpen, openSidebar}) => {
  
  return ( 
    <div className="sidebar">
      {SidebarItems.map((item , index)=> <SidebarItem key={index} item={item}/>)}
    </div>
    
  );
};

export default Sidebar;