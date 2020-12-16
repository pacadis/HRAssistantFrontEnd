import React from "react";

export default class ContractsView extends React.Component{

    constructor(){
        super();
        this.state = {
            contracts: []
        };

        this.renderContract = this.renderContract.bind(this);

        const payload = {
            username: localStorage.getItem('username')
        }

        fetch('http://localhost:8080/hr/viewContract/' + payload.username, {
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

    renderContract = (contract) => {
        const { firstName, lastName, grossSalary, hireDate, type, duration, expirationDate, cnp} = contract;
        return(
            <table className="table table-inverse table-light align-self-center" style={{width: "auto"}}>
                <thead>
                <tr>
                    <th>Detalii contract {lastName} {firstName}: </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">First Name</th>
                    <td>{firstName}</td>
                </tr>
                <tr>
                    <th scope="row">Last Name</th>
                    <td>{lastName}</td>
                </tr>
                <tr>
                    <th scope="row">Gross Salary</th>
                    <td>{grossSalary}</td>
                </tr>
                <tr>
                    <th scope="row">Hire Date</th>
                    <td>{hireDate}</td>
                </tr>
                <tr>
                    <th scope="row">Type</th>
                    <td>{type}</td>
                </tr>
                <tr>
                    <th scope="row">Duration</th>
                    <td>{duration}</td>
                </tr>
                <tr>
                    <th scope="row">Expiration date</th>
                    <td>{expirationDate}</td>
                </tr>
                <tr>
                    <th scope="row">CNP</th>
                    <td>{cnp}</td>
                </tr>

                </tbody>
            </table>
        )
    }

    render(){
        return (
            <div className="card-deck">
                {this.renderContract(this.state.contracts)}
            </div>
        );
    }
}

