import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import LoginMain from './LoginMain'
import Product from './Product'
import Commodity from './Commodity'
import Order from './Order'
import Customer from './Customer'
import Login from './LoginMain/Login'
import ErrorPage404 from './ErrorPage/ErrorPage404'
import Protected from '../Protected/Protected'
import CommodityEdit from './Commodity/CommodityEdit'
import SingleCommodity from './Commodity/SingleCommodity'

export default function MainRoute() {
  

  return (
    <Routes>
    <Route path="/"  element={<Navigate to= "/loginmain/login" />} />
      <Route path="/loginmain/login"  element={<Login/>} />
      <Route path="/loginmain/*"  element={<LoginMain/>} />
      <Route path="/product/*"  element={<Protected Component={Product}/>} />
      <Route path="/commodity/*"  element={<Commodity/>} />
      <Route path="/customer/*"  element={<Customer/>} />
      <Route path="/order/*"  element={<Order/>} />
      <Route path="/commodityedit/*"  element={<CommodityEdit/>} />
      <Route path="/singlecommodity/*"  element={<SingleCommodity/>} />
      <Route path="*"  element={<ErrorPage404/>} />
 
    </Routes>
  );
}
