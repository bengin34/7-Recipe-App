import React from "react";
import { Navigate, Outlet } from "react-router-dom";


const PrivateRouter = ({isLoggedin}) => {
  

  return isLoggedin ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
