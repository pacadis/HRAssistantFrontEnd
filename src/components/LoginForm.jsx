import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { render } from "@testing-library/react";
import Joi from 'joi-browser'

class LoginForm extends React.Component {
    state = {
        account: {username: "", password: ""},
        errors: {}
    };

    schema = {
      username: Joi.string()
          .required()
          .label('Username'),
      password: Joi
          .string()
          .required()
          .label('Password')
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
                    <h2 className="align-self-center">Login</h2>
                    <hr />
                        <Form.Group controlId="formUser">
                        <Form.Label className="labels">Username</Form.Label>
                        <Form.Control className="align-self-center" type="text" placeholder="Username"/>
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                        <Form.Label className="labels">Password</Form.Label>
                        <Form.Control className="align-self-center" type="password" placeholder="Password"/>
                        </Form.Group>
                        <Button className="align-self-center mybtn">
                        SUBMIT
                        </Button>
                </Form>
            </div>
        )
    }
}

export default LoginForm;

