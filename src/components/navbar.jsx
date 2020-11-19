import React from "react";
import logo from "../img/logo.png"
import {Link, NavLink} from 'react-router-dom';
import { Nav, Navbar, Form, Button, FormControl} from "react-bootstrap";

const NavBar = () => {
  return (
    <div className="nav">
        <div className="navbar-brand">
            <a href="/">
                <div className="logo-image">
                    <img src={logo} className="img-kingcode"></img>
                </div>
            </a>
        </div>
        <div className="ulItems">
            <ul className="ulItem">
                <li className="navItems"> 
                <NavLink className="nav-tme-nav-link" to="/">
                    Home
                </NavLink>               
                </li>
                <li className="navItems">
                <NavLink className="nav-tme-nav-link" to="/register">
                    Register
                </NavLink> 
                </li>
                <li className="navItems">
                <NavLink className="nav-tme-nav-link" to="/login">
                    Login
                </NavLink>
                </li>
                <li className="navItems">
                <NavLink className="nav-tme-nav-link" to="/createaccount">
                    CreateAccount
                </NavLink>
                </li>
            </ul>
        </div>
    </div>
  );
};

export default NavBar;
