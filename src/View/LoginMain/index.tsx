
import React from 'react';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import Login from './Login'; 

const LoginMain= () => {
  return (
    <>
    
    
    <Routes>
      <Route path="/login" element={<Login />} />
      
    </Routes>
    
    </>
  );
};

export default LoginMain;
