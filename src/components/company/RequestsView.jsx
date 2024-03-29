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

            fetch('http://localhost:8080/hr/requests/' + payload.username, {
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

    manageRequest(id, response){
        let okResponse = true;
        fetch('http://localhost:8080/hr/request/' + id + '/' + response, {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-type':'application/json'
            }
        })
            .then(res => {
                if (res.status === 200) {
                    okResponse = true;
                }
                else {
                    console.log("error")
                    okResponse = false;
                }
            })
        
        return okResponse;
    }

    refreshPage() {
        window.location.reload(false);
      }

    acceptRequest(id) {
        this.manageRequest(id, "ACCEPT")
        this.populateRequests();
        localStorage.setItem('pendingRequests', localStorage.getItem('pendingRequests') - 1)
        this.refreshPage();
    }

    denyRequest(id) {
        this.manageRequest(id, "DECLINE")
        this.populateRequests();
        localStorage.setItem('pendingRequests', localStorage.getItem('pendingRequests') - 1)
        this.refreshPage();
    }

    renderRequests = (request) => {
        const { id, firstNameEmployee, lastNameEmployee, description, requestStatus, date } = request;
        const statusCol = () => {
            if(requestStatus === "PENDING")
                return <td style={{backgroundColor: "#ffefa0", borderRadius: "10%"}}>{requestStatus}</td>
            return <td>{requestStatus}</td>
        }
        return(
            <tr key={id}>
                <td>{firstNameEmployee}</td>
                <td>{lastNameEmployee}</td>
                <td>{description}</td>
                {statusCol()}
                <td>{date}</td>
                <td><button className="btn btn-success" onClick={ this.acceptRequest.bind(this, id) } >ACCEPTA</button></td>
                <td><button className="btn btn-danger" onClick={ this.denyRequest.bind(this, id) } >REFUZA</button></td>
            </tr>
        )
    }

    render(){
        console.log("render")
        return (
            <div className="card-deck">
                <Table striped bordered hover variant="light" size="sm" className="mr-5 mt-3">
                    <thead className="text-center text-white" style={{backgroundColor: "#1c1e2a"}}>
                    <tr style={{backgroundColor: "#1c1e2a"}}>
                        <th>Prenume</th>
                        <th>Nume</th>
                        <th>Descriere</th>
                        <th>Status</th>
                        <th>Data</th>
                        <th colSpan="2">Actiune</th>
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
