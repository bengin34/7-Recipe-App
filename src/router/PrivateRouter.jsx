import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const PrivateRouter = ({ isLoggedin }) => {
  return isLoggedin ? (
    <>
      <Navbar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRouter;
