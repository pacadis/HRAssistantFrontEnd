import React from "react";
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import SideBar from "../components/sidebar.jsx";
import CreateAccountForm from "./CreateAccountForm"

class DashBoard extends React.Component {
    
    constructor(props){
        super(props);
        this.show = this.show.bind(this);
        this.state = {render: null}
    }

    show(type){
        switch(type){
            case "creare_cont": this.setState({render: <CreateAccountForm/>}); break;
            case "logout": this.logout()
            default: this.setState({render: null})
        }
    }

    logout(){
        localStorage.clear();
        this.props.history.replace('/');
    }
    
    render(){
        return (
            <div style={{background: "rgba(235, 232, 232, 0.9)"}}>
            <Container fluid>
                    <Row>
                        <Col xs={2} id="sidebar-wrapper">      
                            <SideBar show={this.show}/>
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

  const Dashboard = withRouter(DashBoard);
  export default Dashboard