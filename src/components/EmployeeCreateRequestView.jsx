import React from "react";
import NavBar from "./navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class ExmployeeCreateRequestView extends React.Component{
    constructor() {
        super();
        this.state = {
            description: "",
            requestStatus: "PENDING",
            type         : "",
            date         : "",//data curenta
            fromDate     : "", //from si to sa alegem noi
            toDate       : "",
            proxyName    : ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.doSubmit = this.doSubmit.bind(this);
    }

    doSubmit = () => {
        const payload = {
            usernameEmployee: localStorage.getItem('username'),
            description: this.state.description,
            requestStatus: this.state.requestStatus,
            type: this.state.type,
            date: this.state.date,
            fromDate: this.state.fromDate,
            toDate: this.state.toDate,
            proxyName: this.state.proxyName
        }
        //console.log(payload);
        fetch('http://localhost:8080/hr/saveRequest', {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-type':'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(res => {
                if (res.status === 200) {
                    alert("Cererea s-a inregistrat cu succes!")
                    this.state = {
                        description: "",
                        requestStatus: "PENDING",
                        type         : "",
                        date         : "",//data curenta
                        fromDate     : "", //from si to sa alegem noi
                        toDate       : "",
                        proxyName    : ""
                    };
                }
                else if(res.status === 417){
                    res.text().then(text =>{
                        
                        console.log(text);

                    });
                }
            })
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    render() {
        document.body.classList = "";
        document.body.classList.add("background-dashboard");

        return (
            <div>
                <div className=" d-flex justify-content-center align-items-center mx-auto" style={{height:"100vh", marginTop:"250px", marginBottom:"250px"}}>
                    <Form className="d-flex flex-column borderedform border rounded border-secondary custom-container" style={{width:"40%"}}>
                        <h2 className="align-self-center">Inregistreaza cerere</h2>
                        <hr/>
                        <Form.Group controlId="formDescription">
                            <Form.Label className="labels">Descriere</Form.Label>
                            <Form.Control className="align-self-center" as="textarea" rows={2} name="description" type="text" placeholder="Descriere" onChange={this.handleChange}/>
                        </Form.Group>

                      
                        <Form.Group controlId="formType">
                            <Form.Label className="labels">Tip cerere</Form.Label>
                            <Form.Control className="align-self-center" name="type" as="select" placeholder="type" onChange={this.handleChange}>
                            <option>
                                Concediu
                            </option>
                            <option>
                                Concediu pentru donare de sange
                            </option>
                            <option>
                                Concediu din ore suplimentare
                            </option>
                            <option>
                                Concediu pentru inmormantare
                            </option>
                            <option>
                                Concediu pentru casatorie
                            </option>
                        </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="formDate">
                            <Form.Label className="labels">Data curenta</Form.Label>
                            <Form.Control className="align-self-center" name="date" type="date"onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group controlId="formFromDate">
                            <Form.Label className="labels">Data inceput</Form.Label>
                            <Form.Control className="align-self-center" name="fromDate" type="date" onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group controlId="formToDate">
                            <Form.Label className="labels">Data sfarsit</Form.Label>
                            <Form.Control className="align-self-center" name="toDate" type="date"onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group controlId="formProxyName">
                            <Form.Label className="labels">Nume inlocuitor</Form.Label>
                            <Form.Control className="align-self-center" name="proxyName" type="text" placeholder="Nume inlocuitor" onChange={this.handleChange}/>
                        </Form.Group>

                        <Button className="align-self-center mybtn" onClick={this.doSubmit}>
                            Depune cerere
                        </Button>
                    </Form>
                </div>
            </div>
        )
    }
};