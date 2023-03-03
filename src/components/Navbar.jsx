import React from 'react'
import Nav, { NavLi } from './styled/Nav.styled'

const Navbar = () => {
  return (
    <Nav>
    <div>
    <h1>RECIPE</h1>
    </div>
      
      <div>
      <NavLi>ABOUT</NavLi>
      <NavLi>GİTHUB</NavLi>
      <NavLi>LOGOUT</NavLi>
      </div>
      
    </Nav>
  )
}

export default Navbar
