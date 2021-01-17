import React from 'react';

import {Sidebar, Item, Logo, LogoText} from 'react-sidebar-ui'
import 'react-sidebar-ui/dist/index.css';
import {Link} from "react-router-dom";
import sigla from "../img/sigla.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faSignOutAlt,
    faIdCard, faFileInvoiceDollar, faPlaneDeparture, faUserClock, faFolderPlus, faHistory
} from '@fortawesome/free-solid-svg-icons'


export default class SidebarEmployee extends React.Component {

    constructor(){
        super();
        this.redirect = this.redirect.bind(this)
    }

    redirect = () => {
        this.props.history.push('/')
    }

    render() {

        return (
            <Sidebar bgColor='black' isCollapsed={false}>

                <Link to="/">
                    <Logo
                        image={sigla}
                        imageName='react logo'/>
                </Link>

                <LogoText>{localStorage.getItem('name')}</LogoText>

                <Item bgColor='black' onClick={() => this.props.show("detalii_contract")}>
                    <FontAwesomeIcon icon={faIdCard} style={{marginRight: "1rem"}}/>
                    Detalii contract
                </Item>

                <Item bgColor='black' onClick={() => this.props.show("fluturas_salariu")}>
                    <FontAwesomeIcon icon={faFileInvoiceDollar} style={{marginRight: "1rem"}}/>
                    Fluturaș salariu
                </Item>

                <Item bgColor='black' onClick={() => this.props.show("vizualizare_concedii")}>
                    <FontAwesomeIcon icon={faPlaneDeparture} style={{marginRight: "1rem"}}/>
                    Vizualizare concedii
                </Item>

                <Item bgColor='black' onClick={() => this.props.show("vizualizare_pontaj")}>
                    <FontAwesomeIcon icon={faUserClock} style={{marginRight: "1rem"}}/>
                    Vizualizare pontaj
                </Item>

                <Item bgColor='black' onClick={() => this.props.show("inregistrare_cerere")}>
                    <FontAwesomeIcon icon={faFolderPlus} style={{marginRight: "1rem"}}/>
                    Înregistrare cerere
                </Item>

                <Item bgColor='black' onClick={() => this.props.show("istoric_cereri")}>
                    <FontAwesomeIcon icon={faHistory} style={{marginRight: "1rem"}}/>
                    Istoric cereri
                </Item>

                <div className="button-logout">
                    <Item verticalAlign="bottom" bgColor='black' onClick={() => this.props.show("logout")}>
                        <FontAwesomeIcon icon={faSignOutAlt} style={{marginRight: "1rem"}}/>
                        Logout
                    </Item>
                </div>

            </Sidebar>
        )
    };
}