import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import { withRouter } from "react-router";
import SidebarCompany from "./sidebarCompany.jsx";
import CreateAccountForm from "./CreateAccountForm"
import EmployeesView from "./EmployeesView"
import ContractsView from "./ContractsView";

class CompanyDashboard extends React.Component {
    
    constructor(props){
        super(props);
        this.show = this.show.bind(this);
        this.state = {render: null}
    }

    show(type){
        switch(type){
            case "creare_cont": this.setState({render: <CreateAccountForm/>}); break;
            case "gestionare_angajati": this.setState({render: <EmployeesView/>}); break;
            case "vizualizare_contracte": this.setState({render: <ContractsView/>}); break;
            case "logout": this.logout(); break;
            default: this.setState({render: null})
        }
    }

    logout(){
        localStorage.clear();
        this.props.history.replace('/login');
    }
    
    render(){
        document.body.classList = "";
        document.body.classList.add("background-dashboard");
        return (

            <div>
            <Container fluid>
                    <Row>
                        <Col xs={2} id="sidebar-wrapper">      
                            <SidebarCompany show={this.show}/>
                        </Col>
                        <Col xs={10} id="page-content-wrapper">
                            { this.state.render }
                        </Col> 
                    </Row>

                </Container>
            </div>
            );
    }
  };

  const Dashboard = withRouter(CompanyDashboard);
  export default Dashboard
