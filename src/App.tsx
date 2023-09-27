import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainRoute from './View/MainRoute';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store/store'
function App() {
  return (
    <>
     <Provider store={store}> 
    <BrowserRouter>
    <MainRoute />
    </BrowserRouter>
    </Provider>
    </>
    
  );
}

export default App;
