import React, {useState} from "react";
import './Sidebar.css'
import { Link } from "react-router-dom";
const SidebarItem = ({item}) =>
{
    const [open, setOpen] = useState(false)
    if(item.children)
    {
        return (
            <div className="top-section">
                <div className={open ? "sidebar-item open" : "sidebar-item"}>
                    <div className="sidebar-title">
                        <span>
                            {item.icon && <i className={item.icon}></i>}
                            {item.display}
                        </span>
                        <i class="ri-arrow-down-s-line toggle-btn" onClick={() => setOpen(!open)} ></i>
                    </div>
                    <div className="sidebar-content">
                       {item.children.map((child, index) => <SidebarItem key={index} item={child}/>)}
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="top-section">
                <Link to={item.path} className="sidebar-item">
                    <div className="sidebar-title">
                        <span>
                            {item.icon && <i className={item.icon}></i>}
                            {item.display}
                        </span>
                    </div>
                </Link>
            </div>
        )
    }

}
export default SidebarItem;