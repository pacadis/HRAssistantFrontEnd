import React from 'react';
import Joi from 'joi-browser'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


class CreateAccountForm extends React.Component {
    constructor(){
        super()
        this.state = {
            firstName: "", 
            lastName: "", 
            cnp: "", 
            username: "", 
            password: ""
        };

        this.schema = {
            firstName: Joi
                .string()
                .required()
                .label("First Name"),
            lastName: Joi
                .string()
                .required()
                .label("Last Name"),
            username: Joi
                .string()
                .required()
                .label("Email"),
            password: Joi
                .string()
                .required()
                .label("Password"),
            cnp: Joi
                .string()
                .required()
                .label("CNP")
    
        };

        this.handleChange = this.handleChange.bind(this);
        this.doSubmit = this.doSubmit.bind(this);
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
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    render() {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{height:"115vh", marginTop:"100px"}}>
                <Form className="d-flex flex-column borderedform border rounded border-secondary custom-container" style={{width:"40%", marginTop:"100px"}}>
                    <h2 className="align-self-center">Create employee account</h2>
                    <hr />
                        <Form.Group controlId="formFirstName">
                        <Form.Label className="labels">First name</Form.Label>
                        <Form.Control name="firstName" className="align-self-center" type="text" placeholder="First name" onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group controlId="formLastName">
                        <Form.Label className="labels">Last name</Form.Label>
                        <Form.Control name="lastName" className="align-self-center" type="text" placeholder="Last name" onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group controlId="cnp">
                        <Form.Label className="labels">Cod Numeric Personal</Form.Label>
                        <Form.Control name="cnp" className="align-self-center" type="text" placeholder="CNP" onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group controlId="formUser">
                        <Form.Label className="labels">Username</Form.Label>
                        <Form.Control name="username" className="align-self-center" type="text" placeholder="Username" onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                        <Form.Label className="labels">Password</Form.Label>
                        <Form.Control name="password" className="align-self-center" type="password" placeholder="Password" onChange={this.handleChange}/>
                        </Form.Group>
                        <Button className="align-self-center mybtn" onClick={this.doSubmit}>
                            SUBMIT
                        </Button>
                </Form>
            </div>
        )
    }
}
export default CreateAccountForm;