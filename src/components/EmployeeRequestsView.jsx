import React from "react";
import {Table} from "react-bootstrap";

export default class RequestsView extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            requests: []
        };

        this.renderRequests = this.renderRequests.bind(this);
        this.populateRequests();
    }

    populateRequests() {

            const payload = {
                username: localStorage.getItem('username')
            }

            fetch('http://localhost:8080/hr/employeeRequests/' + payload.username, {
                method: 'GET',
                headers: {
                    'Accept' : 'application/json',
                    'Content-type':'application/json'
                }
            })
                .then(res => {
                    console.log("set state")
                    if (res.status === 200) {
                        res.json().then(json =>{
                            this.setState({requests: json});
                        });
                    }
                    else {
                        console.log("error")
                    }
                })
    }

    renderRequests = (request) => {
        const { id, firstNameEmployee, lastNameEmployee, description, requestStatus, date } = request;
        const statusCol = () => {
            if(requestStatus === "PENDING")
                return <td style={{backgroundColor: "red"}}>{requestStatus}</td>
            return <td>{requestStatus}</td>
        }
        return(
            <tr key={id}>
                <td>{firstNameEmployee}</td>
                <td>{lastNameEmployee}</td>
                <td>{description}</td>
                {statusCol()}
                <td>{date}</td>
            </tr>
        )
    }

    render(){
        console.log("render")
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