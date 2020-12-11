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
        const payload = {
            username: this.state.account.username,
            password: this.state.account.password
        }
        fetch('http://localhost:8080/hr/login', {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-type':'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(res => {
                if (res.status === 200) {
                    this.props.history.replace("/")
                    alert("Welcome to our page! ")
                }
                else if (res.status === 404) {
                    alert("Username doesn't exist!")
                    this.setState({
                        account : {username: "", password: ""}
                    })
                }
                else if (res.status === 401) {
                    alert("Password is wrong!")
                    this.setState({
                        account : {username: "", password: ""}
                    })
                }
            })
        console.log('Submitted');
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

