import React from 'react';

import {Sidebar, DropdownItem, Icon, Item, Logo, LogoText} from 'react-sidebar-ui'
import 'react-sidebar-ui/dist/index.css';
import {Link, BrowserRouter as Router , Route, Switch} from "react-router-dom";
import sigla from "../img/sigla.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAddressCard,
    faPaperPlane,
    faUserPlus,
    faChartBar,
    faSignOutAlt,
    faIdCard, faFileInvoice, faFileInvoiceDollar, faPlaneDeparture, faUserClock, faFolderPlus
} from '@fortawesome/free-solid-svg-icons'


export default class SidebarEmployee extends React.Component {

    render() {

        return (
            <Sidebar bgColor='black' isCollapsed={false}>

                <Link to="/">
                    <Logo
                        image={sigla}
                        imageName='react logo'/>
                </Link>

                <LogoText>Dashboard</LogoText>

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