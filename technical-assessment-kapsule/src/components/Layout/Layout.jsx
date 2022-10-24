import React, {useState} from "react";
import Navbar from "../Navbar/Navbar";
import Router from "../../routes/Router";
import Sidebar from "../Sidebar/Sidebar";

const Layout = () =>
{
    return <div className="layout">
            <Sidebar />
              <div className="main__layout">
                 <Navbar/>
                      <div className="content-2">
                        <Router />
                      </div>
                  </div>
             </div>
}
export default Layout;