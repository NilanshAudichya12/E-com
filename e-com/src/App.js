import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Navigation from "./Routes/Navigation/Navigation.component";
import Home from'./Routes/home/home.component'

const Shop = ()=>{
  return(
    <div>
      <h1>This is Shop</h1>
    </div>
  )
};

const App = () => {
  return(
    <Routes>
      <Route path="/" element={<Navigation/>} >
      <Route index element={<Home/>} /> 
      <Route path="shop" element={<Shop/>} /> 
      </Route>
    </Routes>
     
);
};

export default App;
