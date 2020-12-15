// import React from "react";
// import logo from "../img/logo.png"
// import {Link, NavLink} from 'react-router-dom';
// import { Nav, Navbar, Form, Button, FormControl} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import React from 'react'
import { Navbar,Nav } from 'react-bootstrap'
import sigla from "../img/sigla.png";

class BootstrapNavbar extends React.Component{

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll(){
        const distanceY = window.pageYOffset || document.documentElement.scrollTop;
        if(distanceY > 80){
            document.getElementById('navigation').classList.add("smaller");
        }
        else{
            document.getElementById('navigation').classList.remove("smaller");
        }
    }

    render(){
        return(
             <Navbar id="navigation" bg="dark" variant="dark" expand="sm" sticky="top">
                <Navbar.Brand id="logo" className="navbar-brand" href="/">
                     <img src={sigla} style={{marginTop: -7}} />
                 </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Link href="/" className="mybtnnavbar">Home</Nav.Link>
                    <Nav.Link href="/register" className="mybtnnavbar">Register</Nav.Link>
                     <Nav.Link href="/login" className="mybtnnavbar">Login</Nav.Link>
                     </Nav>
                 </Navbar.Collapse>
            </Navbar>
        )  
    }
}

export default BootstrapNavbar;
