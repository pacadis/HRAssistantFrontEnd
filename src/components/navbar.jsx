import "bootstrap/dist/css/bootstrap.css";
import React from 'react'
import { Navbar,Nav } from 'react-bootstrap'
import sigla from "../img/sigla.png";
import authentication from "./auth"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faUserCircle, faSignOutAlt
} from '@fortawesome/free-solid-svg-icons'

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

    handleLogout = () => {
        localStorage.clear()
    }

    links = () => {
        
        const authStatus = authentication()

        if(authStatus === 'NOT_AUTHENTICATED')
            return (
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/" className="mybtnnavbar">Acasa</Nav.Link>
                        <Nav.Link href="/register" className="mybtnnavbar">Inregistrare</Nav.Link>
                        <Nav.Link href="/login" className="mybtnnavbar">Conectare</Nav.Link>
                        <Nav.Link href="/contact" className="mybtnnavbar">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            )
        else if(authStatus === 'company')
            return (
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/" className="mybtnnavbar">Acasa</Nav.Link>
                        <Nav.Link href="/register" className="mybtnnavbar">Inregistrare</Nav.Link>
                        <Nav.Link href="/login" className="mybtnnavbar">Conectare</Nav.Link>
                        <Nav.Link href="/contact" className="mybtnnavbar">Contact</Nav.Link>
                        <Nav.Link href="/companydashboard" className="mybtnnavbar">
                            <FontAwesomeIcon icon={faUserCircle} style={{marginRight: "1rem"}}/>
                        </Nav.Link>
                        <Nav.Link href="/" className="mybtnnavbar" onClick={this.handleLogout.bind(this)}>
                            <FontAwesomeIcon icon={faSignOutAlt} style={{marginRight: "1rem"}}/>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            )
        else if(authStatus === 'employee')
            return (
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/" className="mybtnnavbar">Acasa</Nav.Link>
                        <Nav.Link href="/register" className="mybtnnavbar">Inregistrare</Nav.Link>
                        <Nav.Link href="/login" className="mybtnnavbar">Conectare</Nav.Link>
                        <Nav.Link href="/contact" className="mybtnnavbar">Contact</Nav.Link>
                        <Nav.Link href="/employeedashboard" className="mybtnnavbar">
                            <FontAwesomeIcon icon={faUserCircle} style={{marginRight: "1rem"}}/>
                        </Nav.Link>
                        <Nav.Link href="/" className="mybtnnavbar" onClick={this.handleLogout.bind(this)}>
                            <FontAwesomeIcon icon={faSignOutAlt} style={{marginRight: "1rem"}}/>
                        </Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            )

    }

    render(){
        return(
             <Navbar id="navigation" bg="dark" variant="dark" expand="sm" sticky="top">
                <Navbar.Brand id="logo" className="navbar-brand" href="/">
                     <img alt="NoPhoto" src={sigla} style={{marginTop: -7}} />
                 </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    {this.links()}
            </Navbar>
        )  
    }
}

export default BootstrapNavbar;
