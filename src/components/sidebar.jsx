import React from 'react';

import {Sidebar, DropdownItem, Icon, Item, Logo, LogoText} from 'react-sidebar-ui'
import 'react-sidebar-ui/dist/index.css';
import {Link, BrowserRouter as Router , Route, Switch} from "react-router-dom";
import sigla from "../img/sigla.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faPaperPlane, faUserPlus, faChartBar, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'


export default class SideBar extends React.Component {

    render() {

      return (
            <Sidebar bgColor='black' isCollapsed={false}>

            <Link to="/">
                <Logo
                image={sigla}
                imageName='react logo'/>
            </Link>

            <LogoText>Dashboard</LogoText>
            <Item bgColor='black' onClick={() => this.props.show("vizualizare_angajati")}>
                <FontAwesomeIcon icon={faAddressCard} style={{marginRight: "1rem"}}/>
                Vizualizare angajati
            </Item>

            <Item bgColor='black' onClick={() => this.props.show("vizualizare_cereri")}>
                <FontAwesomeIcon icon={faPaperPlane} style={{marginRight: "1rem"}}/>
                Vizualizare cereri
            </Item>

            <Item bgColor='black' onClick={() => this.props.show("creare_cont")}>
                <FontAwesomeIcon icon={faUserPlus} style={{marginRight: "1rem"}}/>
                    Creeaza cont angajat
            </Item>

            <Item bgColor='black' onClick={() => this.props.show("statistici")}>
                <FontAwesomeIcon icon={faChartBar} style={{marginRight: "1rem"}}/>
                    Statistici angajati
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