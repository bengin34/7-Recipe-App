import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route , } from "react-router-dom";
import { Redirect, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import Login from "../pages/Login";
import Details from "../pages/Details";
import PrivateRouter from "./PrivateRouter";
import { Navigate } from "react-router-dom";

const AppRouter = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);

 


  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
   
        <Route index element={<Home />} />

            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/details" element={<Details/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/login" element={<Login/>} target="_blank" />

        </Routes>
   
    </BrowserRouter>
  );
};

export default AppRouter;

