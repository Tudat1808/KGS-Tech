import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './source/Home';
import Company from './source/Company';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Business from './source/Business';
import Blog from './source/Blog';
import Blog1 from './source/Blog1';
import Layout from './components/Layout';
import Admin from './source/Admin';
import Management from './source/Management/Management';
import EditImages from './source/Management/EditImages';
import Dashboard from './source/Management/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} /> 
          <Route path="/company" element={<Company />} /> 
          <Route path="/business" element={<Business />} /> 
          <Route path="/blog" element={<Blog />} /> 
          <Route path="/blog1" element={<Blog1 />} />
          <Route path="/admin" element={<Admin />}/>
          <Route path="/management" element={<Management />} />
          <Route path="/management/editimages" element={<EditImages/>} />
          <Route path="/management/dashboard" element={<Dashboard/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;