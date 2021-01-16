import React from 'react';
import Joi from 'joi-browser'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class EditEmployee extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            firstName: "", 
            lastName: "", 
            username: this.props.match.params.id,
            password: "",
            cnp: "",
            grossSalary: "",
            type: "",
            hireDate: new Date(),
            duration: "",
            expirationDate: new Date()
        };

        fetch('http://localhost:8080/hr/employee' + '/' + this.props.match.params.id , {
            method: 'GET',
            headers: {
                'Accept' : 'application/json',
                'Content-type':'application/json'
            },
            body: JSON.stringify()
        })
        .then(res => res.json())
        .then(data => this.setState({firstName: data.firstName,
                                     lastName : data.lastName,
                                     username: data.username,
                                     password: data.password,
                                     cnp: data.cnp,
                                     grossSalary: data.grossSalary,
                                     type: data.type,
                                     hireDate: data.hireDate,
                                     duration: data.duration,
                                     expirationDate: data.expirationDate                    
                }))
        this.handleChange = this.handleChange.bind(this);
        this.doSubmit = this.doSubmit.bind(this);
        

        

    }

    doSubmit = () => {
        const payload = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            username: this.state.username,
            password: this.state.password,
            cnp: this.state.cnp,
            grossSalary: this.state.grossSalary,
            type: this.state.type,
            hireDate: this.state.hireDate,
            duration: this.state.duration,
            expirationDate: this.state.expirationDate
            
        }

        
        fetch('http://localhost:8080/hr/employee' + '/' + this.props.match.params.id , {
            method: 'PUT',
            headers: {
                'Accept' : 'application/json',
                'Content-type':'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(res => {
                if (res.status === 200) {
                    alert("Modificat")
                    this.setState({
                        firstName: "", 
                        lastName: "", 
                        username: this.props.match.params.id,
                        password: "",
                        cnp: "",
                        grossSalary: "",
                        type: "",
                        hireDate: "",
                        duration: "",
                        expirationDate: ""
                    })
                }
                else if (res.status === 401) {
                    alert("Username already exist!")
                    this.setState({
                        firstName: "", 
                        lastName: "", 
                        username: this.props.match.params.id,
                        password: "",
                        cnp: "",
                        grossSalary: "",
                        type: "",
                        hireDate: "",
                        duration: "",
                        expirationDate: ""
                    })
                }
                else if(res.status === 417){
                    res.text().then(text =>{
                        
                        console.log(text);

                    });
                }
            })
            this.props.history.goBack();
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    render() {
        return (

            <div className="d-flex justify-content-center align-items-center" style={{height:"100vh", marginTop:"450px", marginBottom:"10rem"}}>
                
                <Form className="d-flex flex-column borderedform border rounded border-secondary custom-container" style={{width:"40%"}}>
                    <h2 className="align-self-center">Editeaza cont angajat</h2>
                    <hr />
                        <Form.Group controlId="formFirstName">
                        <Form.Label className="labels">Prenume</Form.Label>
                        <Form.Control name="firstName" className="align-self-center"  type="text" placeholder="Prenume" value={this.state.firstName} onChange={this.handleChange}>
                        </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="formLastName">
                        <Form.Label className="labels">Nume</Form.Label>
                        <Form.Control name="lastName" className="align-self-center" type="text" placeholder="Nume" value={this.state.lastName} onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group controlId="formUsername">
                        <Form.Label className="labels">Nume utilizator</Form.Label>
                        <Form.Control name="username" className="align-self-center" type="text" placeholder="Nume utilizator"  value={this.state.username} onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                        <Form.Label className="labels">Password</Form.Label>
                        <Form.Control name="password" className="align-self-center" type="password" placeholder="Parola" value={this.state.password} onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group controlId="cnp">
                        <Form.Label className="labels">Cod Numeric Personal</Form.Label>
                        <Form.Control name="cnp" className="align-self-center" type="text" placeholder="CNP"  value={this.state.cnp} onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group controlId="formGrossSalary">
                        <Form.Label className="labels">Salariu brut</Form.Label>
                        <Form.Control name="grossSalary" className="align-self-center" type="text" placeholder="Salariu brut" value={this.state.grossSalary} onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group controlId="formType">
                        <Form.Label className="labels">Tip </Form.Label>
                        <Form.Control name="type" className="align-self-center" as="select" placeholder="Tip" value={this.state.type} onChange={this.handleChange}>
                            <option>
                                FullTime
                            </option>
                            <option>
                                PartTime4
                            </option>
                            <option>
                                PartTime6
                            </option>
                        </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="formHireDate">
                        <Form.Label className="labels">Data angajare</Form.Label>
                        <Form.Control name="hireDate" className="align-self-center" type="date" placeholder="Data angajare" value={this.state.hireDate} onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group controlId="formDuration">
                        <Form.Label className="labels">Durata </Form.Label>
                        <Form.Control name="duration" className="align-self-center" type="text" placeholder="Durata" value={this.state.duration} onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group controlId="formExpirationDate">
                        <Form.Label className="labels">Data expirare</Form.Label>
                        <Form.Control name="expirationDate" className="align-self-center" type="date" placeholder="Data expirare" value={this.state.expirationDate} onChange={this.handleChange}/>
                        </Form.Group>

                        <Button className="align-self-center mybtn" onClick={this.doSubmit}>
                            TRIMITE
                        </Button>
                </Form>
            </div>
        )
    }

}