import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import { withRouter } from "react-router";
import SidebarCompany from "./sidebarCompany.jsx";
import CreateAccountForm from "./CreateAccountForm"
import EmployeesView from "./EmployeesView"
import ContractsView from "./ContractsView";
import RequestsView from "./RequestsView";

class CompanyDashboard extends React.Component {
    
    constructor(){
        super();
        this.show = this.show.bind(this);
        this.getPendingRequests = this.getPendingRequests.bind(this)
        this.state = {render: null, pendingRequests: this.getPendingRequests()}
    }

    getPendingRequests() {

        fetch('http://localhost:8080/hr/noRequests/' + localStorage.getItem('username'), {
            method: 'GET',
            headers: {
                'Accept' : 'application/json',
                'Content-type':'application/json'
            }
        })
            .then(res => {
                
                if (res.status === 200) {

                    res.text().then(text =>{
                        
                        console.log(text);
                        localStorage.setItem('pendingRequests', text)
                        this.setState({pendingRequests: text})

                    });
                }
                else if (res.status === 404) {
                    alert("Internal server error")
                }
        });

    }

    show(type){
        switch(type){
            case "creare_cont": this.setState({render: <CreateAccountForm/>}); break;
            case "gestionare_angajati": this.setState({render: <EmployeesView/>}); break;
            case "vizualizare_cereri": this.setState({render: <RequestsView/>}); break;
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
        console.log("RENDER")

        return (

            <div>
            <Container fluid>
                    <Row>
                        <Col xs={2} id="sidebar-wrapper">      
                            <SidebarCompany show={this.show} pending={this.state.pendingRequests}/>
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
