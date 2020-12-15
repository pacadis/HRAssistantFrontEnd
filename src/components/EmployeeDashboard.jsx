import React from "react";
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import SidebarEmployee from "./sidebarEmployee";
import CreateAccountForm from "./CreateAccountForm"

class EmployeeDashboard extends React.Component {

    constructor(props){
        super(props);
        this.show = this.show.bind(this);
        this.state = {render: null}
    }

    show(type){
        switch(type){
            case "logout": this.logout(); break;
            default: this.setState({render: null})
        }
    }

    logout(){
        localStorage.clear();
        this.props.history.replace('/login');
    }

    render(){
        return (
            <div className="background-dashboard">
                <Container fluid>
                    <Row>
                        <Col xs={2} id="sidebar-wrapper">
                            <SidebarEmployee show={this.show}/>
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

const Dashboard = withRouter(EmployeeDashboard);
export default Dashboard