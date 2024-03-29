import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import { withRouter } from "react-router";

class EmployeesList extends React.Component{

    constructor(){
        super();
        this.state = {
            employees: []
        };

        this.renderEmployee = this.renderEmployee.bind(this);

        fetch('http://localhost:8080/hr/employeeOfCompany/' + localStorage.getItem("username"), {
            method: 'GET',
            headers: {
                'Accept' : 'application/json',
                'Content-type':'application/json'
            }
        })
            .then(res => {
                if (res.status === 200) {
                    res.json().then(json =>{
                        this.setState({employees: json});
                    });

                    // LOGIN PERSISTANCE
                }
                else {
                    console.log("error")
                }
            })
    }

    handleDelete(username) {
        const payload = {
            username: username
        }

        console.log('http://localhost:8080/hr/employee/' + payload.username)
        fetch('http://localhost:8080/hr/employee/' + payload.username, {
            method: 'DELETE',
            headers: {
                'Accept' : 'application/json',
                'Content-type':'application/json'
            },
        })
            .then(res => {
                if (res.status === 200) {
                    alert("Username deleted!")
                    const newState = this.state.employees.filter((employee) => employee.username !== username)
                    this.setState({employees: newState})
                }
                else if (res.status === 401) {
                    alert("Username doesn't exist!")
                }
            });
        console.log('Submitted');
    };

    renderEmployee = (employee) => {
        const {firstName, lastName, username, id} = employee;
        return (
            <div className="card mt-3 col-md-6 col-lg-3 mr-5 mb-2" onClick={() => console.log(id)} style={{cursor: "pointer"}}>
                <div className="card-body">
                    <h4 className="card-title">{lastName}</h4>
                    <h6 className="card-title">{firstName}</h6>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Username: {username}</small>
                </div>
                <div className="card-footer">
                    <div className="btn-group justify-content-center d-flex align-items-center align-middle">    
                        <Button className="btn btn-warning btn-md center-block mr-3" onClick={() => this.props.history.push('/companydashboard/employee/' + username)}>
                            <FontAwesomeIcon icon={faEdit}/>
                        </Button>
                        <Button onClick={() => {
                            this.handleDelete(username)
                        }} className="btn btn-warning btn-md center-block mr-3">
                            <FontAwesomeIcon icon={faTrashAlt}/>
                        </Button>
                    </div>
                </div>
            </div>
        )
    }

    render(){
        return (
                <div className="container-fluid">
                    <div className="row">
                        {this.state.employees.map(employee => this.renderEmployee(employee))}
                    </div>
                </div>
        );
    }
}

const EmployeesView = withRouter(EmployeesList)
export default EmployeesView