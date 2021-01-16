import React from "react";
import {Table} from "react-bootstrap";

export default class RequestsView extends React.Component{

    constructor(){
        super();
        this.state = {
            requests: []
        };

        this.renderRequests = this.renderRequests.bind(this);

        const payload = {
            username: localStorage.getItem('username')
        }

        fetch('http://localhost:8080/hr/requests/' + payload.username, {
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

    renderRequests = (request) => {
        const { firstNameEmployee, lastNameEmployee, description, requestStatus, date } = request;
        return(
            <tr>
                <td>{firstNameEmployee}</td>
                <td>{lastNameEmployee}</td>
                <td>{description}</td>
                <td>{requestStatus}</td>
                <td>{date}</td>
                <td><button class="btn btn-success">ACCEPTA</button></td>
                <td><button class="btn btn-danger">REFUZA</button></td>
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
                        <th>Descriere</th>
                        <th>Status</th>
                        <th>Data</th>
                        <th><button class="btn btn-success">ACCEPTA</button></th>
                        <th><button class="btn btn-danger">REFUZA</button></th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.requests.map(request => this.renderRequests(request))}
                    </tbody>
                </Table>
            </div>
        );
    }
}
