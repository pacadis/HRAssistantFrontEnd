import React from 'react';

import {Sidebar, Item, Logo, LogoText} from 'react-sidebar-ui'
import 'react-sidebar-ui/dist/index.css';
import sigla from "../img/sigla.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAddressCard,
    faPaperPlane,
    faUserPlus,
    faChartBar,
    faSignOutAlt,
    faIdBadge
} from '@fortawesome/free-solid-svg-icons'
import { withRouter } from 'react-router-dom';
import { Badge } from 'react-bootstrap';


class SidebarCompany extends React.Component {

    constructor(props){
        super(props);
        this.redirect = this.redirect.bind(this)
    }

    redirect = () => {
        this.props.history.push('/')
    }

    render() {

      return (
            <Sidebar bgColor='black' isCollapsed={false}>

            <div onClick={this.redirect} style={{cursor: "pointer"}}>
                <Logo
                image={sigla}
                imageName='react logo'/>
            </div>

            <LogoText>{localStorage.getItem('name')}</LogoText>
            <Item bgColor='black' onClick={() => this.props.show("gestionare_angajati")}>
                <FontAwesomeIcon icon={faIdBadge} style={{marginRight: "1rem"}}/>
                Gestionare conturi
            </Item>

            <Item bgColor='black' onClick={() => this.props.show("vizualizare_contracte")}>
                <FontAwesomeIcon icon={faAddressCard} style={{marginRight: "1rem"}}/>
                Vizualizare contracte
            </Item>

            <Item bgColor='black' onClick={() => this.props.show("vizualizare_cereri")}>
                <FontAwesomeIcon icon={faPaperPlane} style={{marginRight: "1rem"}}/>
                Vizualizare cereri
                <span className="badge badge-pill badge-danger" style={{marginLeft: "1rem"}}> {this.props.pending} </span>
            </Item>

            <Item bgColor='black' onClick={() => this.props.show("creare_cont")}>
                <FontAwesomeIcon icon={faUserPlus} style={{marginRight: "1rem"}}/>
                    Creează cont
            </Item>

            <Item bgColor='black' onClick={() => this.props.show("statistici")}>
                <FontAwesomeIcon icon={faChartBar} style={{marginRight: "1rem"}}/>
                    Statistici angajați
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

export default withRouter(SidebarCompany);