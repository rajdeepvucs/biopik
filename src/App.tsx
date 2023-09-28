import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainRoute from "./View/MainRoute";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <MainRoute />
    </BrowserRouter>
  );
}

export default App;
