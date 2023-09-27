import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginMain from "./LoginMain";
import Product from "./Product";
import Commodity from "./Commodity";
import Order from "./Order";
import Customer from "./Customer";
import Login from "./LoginMain/Login";
export default function MainRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/loginmain/*" element={<LoginMain />} />
        <Route path="/product/*" element={<Product />} />
        <Route path="/commodity/*" element={<Commodity />} />
        <Route path="/customer/*" element={<Customer />} />
        <Route path="/order/*" element={<Order />} />
      </Routes>
    </>
  );
}
