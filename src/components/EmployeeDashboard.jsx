import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import { withRouter } from "react-router";
import SidebarEmployee from "./sidebarEmployee";
import EmployeeContractView from "./EmployeeContractView";
import EmployeeClockingView from "./EmployeeClockingView";
import EmployeePayslipView from "./EmployeePayslipView";
import EmployeeHolidayView from "./EmployeeHolidayView";
import EmployeeCreateRequestView from "./EmployeeCreateRequestView";
import DefaultEmployeeDashboard from "./DefaultEmployeeDashboard";
import EmployeeRequestsView from "./EmployeeRequestsView";


class EmployeeDashboard extends React.Component {

    constructor(props){
        super(props);
        this.show = this.show.bind(this);
        this.state = {render: <DefaultEmployeeDashboard/>}
    }

    show(type){
        switch(type){
            case "detalii_contract": this.setState({render: <EmployeeContractView/>}); break;
            case "vizualizare_pontaj": this.setState({render : <EmployeeClockingView/>}); break;
            case "fluturas_salariu": this.setState({render: <EmployeePayslipView />}); break;
            case "vizualizare_concedii" : this.setState({render: <EmployeeHolidayView />}); break;
            case "inregistrare_cerere" : this.setState({render: <EmployeeCreateRequestView/>}); break;
            case "istoric_cereri" : this.setState({render: <EmployeeRequestsView/>}); break;
            case "logout": this.logout(); break;
            default: this.setState({render: <DefaultEmployeeDashboard/>})
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
