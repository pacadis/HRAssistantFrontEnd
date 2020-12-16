import React from "react";

export default class EmployeesView extends React.Component{

    constructor(){
        super();
        this.state = {
            employees: []
        };

        this.renderEmployee = this.renderEmployee.bind(this);

        fetch('http://localhost:8080/hr/employee', {
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

    renderEmployee = (employee) => {
        const { firstName, lastName, cnp, username, id } = employee;
        return(
             <div className="card" onClick={() => console.log(id)} style={{cursor: "pointer"}}>
                <div className="card-body">
                    <h5 className="card-title">{firstName} {lastName}</h5>
                    <p class="card-text">Bla bla bla and CNP: {cnp}</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Username: {username}</small>
                </div>
             </div>
        )
    }

    render(){
        return (
        
            <div className="card-deck">
                {this.state.employees.map(employee => this.renderEmployee(employee))}
            </div>
        
        );
    }

}