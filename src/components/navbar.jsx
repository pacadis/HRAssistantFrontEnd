// import React from "react";
// import logo from "../img/logo.png"
// import {Link, NavLink} from 'react-router-dom';
// import { Nav, Navbar, Form, Button, FormControl} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
  } from "react-router-dom";
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import sigla from "../img/sigla.png";

class BootstrapNavbar extends React.Component{

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <Router>
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand href="/">
                                    <img src={sigla} style={{width:100, marginTop: -7}} />
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="ml-auto">
                                    <Nav.Link href="/" className="mybtnnavbar">Home</Nav.Link>
                                    <Nav.Link href="/register" className="mybtnnavbar">Register</Nav.Link>
                                    <Nav.Link href="/login" className="mybtnnavbar">Login</Nav.Link>
                                    <Nav.Link href="/createaccount" className="mybtnnavbar">Create Account</Nav.Link>

                                    <Nav.Link href="/companydashboard" className="mybtnnavbar">CompanyDashboard</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </Router>
                    </div>
                </div>
            </div>
        )  
    }
}

export default BootstrapNavbar;


// const NavBar = () => {
//   return (
//     <div className="nav">
//         <div className="navbar-brand">
//             <a href="/">
//                 <div className="logo-image">
//                     <img src={logo} className="img-kingcode"></img>
//                 </div>
//             </a>
//         </div>
//         <div className="ulItems">
//             <ul className="ulItem">
//                 <li className="navItems"> 
//                 <NavLink className="nav-tme-nav-link" to="/">
//                     Home
//                 </NavLink>               
//                 </li>
//                 <li className="navItems">
//                 <NavLink className="nav-tme-nav-link" to="/register">
//                     Register
//                 </NavLink> 
//                 </li>
//                 <li className="navItems">
//                 <NavLink className="nav-tme-nav-link" to="/login">
//                     Login
//                 </NavLink>
//                 </li>
//                 <li className="navItems">
//                 <NavLink className="nav-tme-nav-link" to="/createaccount">
//                     CreateAccount
//                 </NavLink>
//                 </li>
//             </ul>
//         </div>
//     </div>
//   );
// };

// export default NavBar;
