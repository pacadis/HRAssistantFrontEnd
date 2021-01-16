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
            username: "",
            password: "",
            cnp: "",
            grossSalary: "",
            type: "",
            hireDate: "",
            duration: "",
            expirationDate: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.doSubmit = this.doSubmit.bind(this);

    }

    componentDidMount(){
        console.log("PULA")
        this.setState({username: this.props.match.params.id});
    }

    doSubmit = () => {
        const payload = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            cnp: this.state.cnp,
            company: localStorage.getItem('username'),
            username: this.state.username,
            password: this.state.password
        }
        
        fetch('http://localhost:8080/hr/employee', {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-type':'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(res => {
                if (res.status === 200) {
                    alert("Account created!")
                    this.setState({
                        firstName: "", 
                        lastName: "", 
                        cnp: "", 
                        username: "", 
                        password: ""
                    })
                }
                else if (res.status === 401) {
                    alert("Username already exist!")
                    this.setState({
                        firstName: "", 
                        lastName: "", 
                        cnp: "", 
                        username: "", 
                        password: ""
                    })
                }
                else if(res.status === 418){
                    alert("Invalid CNP!")
                }
            })
        console.log('Submitted');
    }

    handleChange(event) {
        
    };

    render() {
        return (

            <div className="d-flex justify-content-center align-items-center" style={{height:"115vh", marginTop:"70px"}}>
                
                <h1> {this.state.username} </h1>
                
                <Form className="d-flex flex-column borderedform border rounded border-secondary custom-container" style={{width:"40%", marginTop:"80px"}}>
                    <h2 className="align-self-center">Creeaza cont angajat</h2>
                    <hr />
                        <Form.Group controlId="formFirstName">
                        <Form.Label className="labels">Prenume</Form.Label>
                        <Form.Control name="firstName" className="align-self-center" type="text" placeholder="Prenume" onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group controlId="formLastName">
                        <Form.Label className="labels">Nume</Form.Label>
                        <Form.Control name="lastName" className="align-self-center" type="text" placeholder="Nume" onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group controlId="cnp">
                        <Form.Label className="labels">Cod Numeric Personal</Form.Label>
                        <Form.Control name="cnp" className="align-self-center" type="text" placeholder="CNP" onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group controlId="formUser">
                        <Form.Label className="labels">Nume utilizator</Form.Label>
                        <Form.Control name="username" className="align-self-center" type="text" placeholder="Nume utilizator" onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                        <Form.Label className="labels">Parola</Form.Label>
                        <Form.Control name="password" className="align-self-center" type="password" placeholder="Parola" onChange={this.handleChange}/>
                        </Form.Group>
                        <Button className="align-self-center mybtn" onClick={this.doSubmit}>
                            SUBMIT
                        </Button>
                </Form>
            </div>
        )
    }

}