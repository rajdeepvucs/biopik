
import React from 'react';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import Login from './Login'; 
import Signup from './Signup';

const LoginMain= () => {
  return (
    <>
    
    
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      
    </Routes>
    
    </>
  );
};

export default LoginMain;
