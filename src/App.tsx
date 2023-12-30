import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import './index.css';
import Dashboard from './components/Dashboard';
import Headers from './components/Headers';
import Product from './components/Product';
import Footer from './components/Footer';
import DichVu from './components/DichVu';
import Support from './components/Support';
import Profile from './components/Profile';
import DangKy from './components/DangKy';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div>
        <Headers />
        <div>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Email" element={<Product />} />
            <Route path="/DichVu" element={<DichVu />} />
            <Route path="/Support" element={<Support />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/DangKy" element={<DangKy />} />
            <Route path="/Login" element={<Login />} />
            
            
            
            <Route path="/Dashboard" element={<Dashboard />} />

            <Route element={<Navigate to="/" />} />


          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
