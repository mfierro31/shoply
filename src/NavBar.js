import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from "reactstrap";
import { useSelector } from 'react-redux';
import './NavBar.css';

const NavBar = () => {
  const cartItems = useSelector(store => store.cart);

  return (
    <div>
      <Navbar color="light" light expand="md" fixed="top" className="NavBar-bar">
        <NavLink to="/" className="navbar-brand">
          Shoply
        </NavLink>

        <Nav className="ml-auto" navbar>         
          <NavItem>
            <NavLink className="NavBar-link" to="/cart">Cart: {cartItems.reduce((acc, currVal) => acc + currVal.qty, 0)}</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  )
}

export default NavBar;