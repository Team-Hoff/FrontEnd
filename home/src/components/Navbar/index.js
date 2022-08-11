import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./Navbar"

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
            <h1>logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
            <NavLink to="/about" activeStyle>
                About
            </NavLink>
            <NavLink to="/services" activeStyle>
                Services
            </NavLink>
            <NavLink to="/contact_us" activeStyle>
                Contact us
            </NavLink>
            <NavLink to="/sign_up" activeStyle>
                Sign up
            </NavLink>
        </NavMenu>
        <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  )
}

export default Navbar