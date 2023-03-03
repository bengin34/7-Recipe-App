import React from 'react'
import { BrowserRouter } from "react-router-dom";
import {Routes, Route} from "react-router-dom" 
import Home from '../pages/Home';

const AppRouter = () => {
  return (
    <BrowserRouter>
    
      <Routes>

        <Route  path='/' element= {  <Home /> }  />

      </Routes>

    </BrowserRouter>
  )
}

export default AppRouter
