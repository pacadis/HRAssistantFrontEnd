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
                <tr>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{grossSalary}</td>
                    <td>{hireDate}</td>
                    <td>{type}</td>
                    <td>{duration}</td>
                    <td>{expirationDate}</td>
                    <td>{cnp}</td>
                </tr>
        )
    }

    render(){
        return (
            <div className="card-deck">
                <Table striped bordered hover variant="light" size="sm">
                    <thead>
                    <tr>
                        <th>Prenume</th>
                        <th>Nume</th>
                        <th>Salariu brut</th>
                        <th>Data angajarii</th>
                        <th>Tip</th>
                        <th>Durata</th>
                        <th>Data expirarii</th>
                        <th>CNP</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.contracts.map(contract => this.renderContracts(contract))}
                    </tbody>
                </Table>
            </div>
        );
    }
}

