
import React , {useState} from 'react';
import {Navigate ,BrowserRouter, Routes ,Route } from 'react-router-dom';
import Settings from '../Pages/Settings/Settings';
import Elements from '../Pages/Elements/Elements';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Tables from '../Pages/Tables/Tables';
import Analytics from '../Pages/Analytics/Analytics';
const Router =() => { 
  return (  
    
          <Routes>
              <Route path="/" element={< Navigate to="/Dashboard" element={<Dashboard />} />} />
              <Route path='/Dashboard' element={<Dashboard />} />
              <Route path='/Elements/Elements1' element={<Elements />} />
              <Route path='/Elements/Elements2' element={<Elements />} />
              <Route path='/Settings' element={<Settings />} />
              <Route path='Tables/Tables1' element={<Tables />} />
              <Route path='Tables/Tables2' element={<Tables />} />
              <Route path='Tables/Tables3' element={<Tables />} />
              <Route path='Tables/Tables4' element={<Tables />} />
              <Route path='/Analytics' element={<Analytics />} />
          </Routes>
          
  );
}

export default Router;
