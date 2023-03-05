import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Navigate, Outlet } from 'react-router-dom';
import Login from '../pages/Login';

const PrivateRouter = ({isLoggedin}) => {



  return 
  // ( isLoggedin ?  <Outlet/>
   
  //    : <Navigate path="/login" element={<Login />} exact />
          
    
    
  //   )
  

  
}

export default PrivateRouter
