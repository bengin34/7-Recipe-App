
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Navigate} from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import Login from "../pages/Login";
import Details from "../pages/Details";
import PrivateRouter from "./PrivateRouter";
const AppRouter = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} />} />

        <Route path="/" element={<PrivateRouter isLoggedin={isLoggedin} />}>
          {isLoggedin ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/details" element={<Details />} />
          </>
          ) : (
            <Navigate to="/login" />
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
