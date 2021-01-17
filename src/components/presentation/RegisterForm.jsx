import React from 'react';
import Joi from 'joi-browser'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NavBar from '../utils/navbar';

class RegisterForm extends React.Component {
    
    constructor(){

        super();

        this.state = {
            companyName: "",
            address: "",
            username: "",
            password: "",
            confirm: "",
            description: ""
        };

        this.schema = {
            companyName: Joi
                .string()
                .required()
                .label("Company name"),
            address: Joi
                .string()
                .required()
                .label("Address"),
            username: Joi
                .string()
                .required()
                .label("Username"),
            password: Joi
                .string()
                .required()
                .label("Password"),
            confirm: Joi
                .string()
                .required()
                .label("Confirm")

        };

        this.handleChange = this.handleChange.bind(this);
        this.doSubmit = this.doSubmit.bind(this);
    }

    doSubmit = () => {
        const payload = {
            name: this.state.name,
            address: this.state.address,
            username: this.state.username,
            password: this.state.password,
            description: "Cool company!"
        }
        fetch('http://localhost:8080/hr/register', {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-type':'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(res => {
                if (res.status === 200) {
                    this.props.history.replace("/login")
                }
                else if (res.status === 401) {
                    alert("Username already exist!")
                    this.setState({
                        name: "", 
                        address: "", 
                        username: "", 
                        password: "", 
                        confirm: "", 
                        description: ""
                    })
                }
            })
        console.log('Submitted');
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    render() {
        document.body.classList = "";
        document.body.classList.add("background-general");
        return (
            <div className="background-general">
            <NavBar/>
            <div className="d-flex justify-content-center align-items-center" style={{height:"123vh", marginTop:"210px"}}>
                <Form className="d-flex flex-column borderedform border rounded border-secondary custom-container" style={{width:"40%"}}>
                    <h2 className="align-self-center" style={{textAlign:"center"}}></h2>
                    <h1 className="align-self-center">Inregistrare</h1>
                    <hr />
                        <Form.Group controlId="formCompanyName">
                        <Form.Label className="labels">Nume companie</Form.Label>
                        <Form.Control name="name" className="align-self-center" type="text" placeholder="Nume companie" onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group controlId="formAddress">
                        <Form.Label className="labels">Adresa</Form.Label>
                        <Form.Control name="address" className="align-self-center" type="text" placeholder="Adresa" onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group controlId="formUser">
                        <Form.Label className="labels">Nume utilizator</Form.Label>
                        <Form.Control name="username" className="align-self-center" type="text" placeholder="Nume utilizator" onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                        <Form.Label className="labels">Parola</Form.Label>
                        <Form.Control name="password" className="align-self-center" type="password" placeholder="Parola" onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group controlId="formConfirmPassword">
                        <Form.Label className="labels">Confirmare parola</Form.Label>
                        <Form.Control className="align-self-center" type="password" placeholder="Confirmare parola" onChange={this.handleChange}/>
                        </Form.Group>
                        <Button className="align-self-center mybtn" onClick={this.doSubmit}>
                            TRIMITE
                        </Button>
                </Form>
            </div>
            </div>
        )
    }
}
export default RegisterForm;
