import React from "react";
import {Table} from "react-bootstrap";

export default class ContractsView extends React.Component{

    constructor(){
        super();
        this.state = {
            contracts: []
        };

        this.renderContracts = this.renderContracts.bind(this);

        const payload = {
            username: localStorage.getItem('username')
        }

        fetch('http://localhost:8080/hr/viewContracts/' + payload.username, {
            method: 'GET',
            headers: {
                'Accept' : 'application/json',
                'Content-type':'application/json'
            }
        })
            .then(res => {
                if (res.status === 200) {
                    res.json().then(json =>{
                        this.setState({contracts: json});
                    });

                    // LOGIN PERSISTANCE
                }
                else {
                    console.log("error")
                }
            })
    }

    renderContracts = (contract) => {
        const { firstName, lastName, grossSalary, hireDate, type, duration, expirationDate, cnp} = contract;
        return(
           <Table responsive="sm" striped bordered hover variant="light">
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                  </tr>
                </tbody>
            </Table>
        )
    }

    render(){
        return (
            <div className="card-deck">
                {this.state.contracts.map(contract => this.renderContracts(contract))}
            </div>
        );
    }
}

