import React, { Component } from 'react';
import Joi from 'joi-browser'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class RegisterForm extends React.Component {
    state = {
        account: {companyName: "",address: "",username: "", password: "",confirm: ""},
        errors: {}
    };

    schema = {
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

    doSubmit = () => {
        //Call the server
        console.log('Submitted');
        this.props.history.replace("/")
    }

    render() {
        return (
            <div className="d-flex justify-content-center align-items-center loginbg" style={{height:"100vh"}}>
                <Form className="d-flex flex-column borderedform border rounded border-secondary" style={{width:"40%"}}>
                    <h2 className="align-self-center">Register your company</h2>
                    <h1 className="align-self-center">SIGN UP</h1>
                    <hr />
                        <Form.Group controlId="formCompanyName">
                        <Form.Label className="labels">Company name</Form.Label>
                        <Form.Control className="align-self-center" type="text" placeholder="Company name"/>
                        </Form.Group>

                        <Form.Group controlId="formAddress">
                        <Form.Label className="labels">Address</Form.Label>
                        <Form.Control className="align-self-center" type="text" placeholder="Address"/>
                        </Form.Group>

                        <Form.Group controlId="formUser">
                        <Form.Label className="labels">Username</Form.Label>
                        <Form.Control className="align-self-center" type="text" placeholder="Username"/>
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                        <Form.Label className="labels">Password</Form.Label>
                        <Form.Control className="align-self-center" type="password" placeholder="Password"/>
                        </Form.Group>

                        <Form.Group controlId="formConfirmPassword">
                        <Form.Label className="labels">Address</Form.Label>
                        <Form.Control className="align-self-center" type="password" placeholder="Confirm password"/>
                        </Form.Group>
                        <Button className="align-self-center mybtn">
                        SUBMIT
                        </Button>
                </Form>
            </div>
        )
    }
}
export default RegisterForm;
