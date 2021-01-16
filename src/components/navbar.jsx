import "bootstrap/dist/css/bootstrap.css";
import React from 'react'
import { Navbar,Nav } from 'react-bootstrap'
import sigla from "../img/sigla.png";

class BootstrapNavbar extends React.Component{

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
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
                     <img alt="NoPhoto" src={sigla} style={{marginTop: -7}} />
                 </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Link href="/" className="mybtnnavbar">Acasa</Nav.Link>
                    <Nav.Link href="/register" className="mybtnnavbar">Inregistrare</Nav.Link>
                     <Nav.Link href="/login" className="mybtnnavbar">Conectare</Nav.Link>
                     <Nav.Link href="/contact" className="mybtnnavbar">Contact</Nav.Link>
                     </Nav>
                 </Navbar.Collapse>
            </Navbar>
        )  
    }
}

export default BootstrapNavbar;
