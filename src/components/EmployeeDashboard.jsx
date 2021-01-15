import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import { withRouter } from "react-router";
import SidebarEmployee from "./sidebarEmployee";
import EmployeeContractView from "./EmployeeContractView";
import EmployeeClockingView from "./EmployeeClockingView";
import EmployeePayslipView from "./EmployeePayslipView";
import EmployeeHolidayView from "./EmployeeHolidayView";
import EmployeeCreateRequestView from "./EmployeeCreateRequestView";


class EmployeeDashboard extends React.Component {

    constructor(props){
        super(props);
        this.show = this.show.bind(this);
        this.state = {render: null}
    }

    show(type){
        switch(type){
            case "detalii_contract": this.setState({render: <EmployeeContractView/>}); break;
            case "vizualizare_pontaj": this.setState({render : <EmployeeClockingView/>}); break;
            case "fluturas_salariu": this.setState({render: <EmployeePayslipView />}); break;
            case "vizualizare_concedii" : this.setState({render: <EmployeeHolidayView />}); break;
            case "inregistrare_cerere" : this.setState({render: <EmployeeCreateRequestView/>}); break;
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

            //varianta atanasov
            // <div className="background-dashboard">
            //     <div className="container">
            //         <div className="row">
            //             <div className="col-3"  >
            //                 <SidebarEmployee show={this.show}/>
            //             </div>
            //             <div className="col"  >
            //                 { this.state.render }
            //             </div>
            //         </div>

            //     </div>
            // </div>
        );
    }
};

const Dashboard = withRouter(EmployeeDashboard);
export default Dashboard
