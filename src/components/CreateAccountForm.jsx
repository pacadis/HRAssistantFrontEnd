import React from 'react';
import Joi from 'joi-browser'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


class CreateAccountForm extends React.Component {
    state = {
        account: {firstName: "",lastName: "",username: "", password: ""},
        errors: {}
    };

    schema = {
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

    };

    doSubmit = () => {
        //Call the server
        console.log('Submitted');
    }

    render() {
        return (
            <div className="d-flex justify-content-center align-items-center loginbg" style={{height:"100vh"}}>
                <Form className="d-flex flex-column borderedform border rounded border-secondary" style={{width:"40%"}}>
                    <h2 className="align-self-center">Create employee account</h2>
                    <hr />
                        <Form.Group controlId="formFirstName">
                        <Form.Label className="labels">First name</Form.Label>
                        <Form.Control className="align-self-center" type="text" placeholder="First name"/>
                        </Form.Group>

                        <Form.Group controlId="formLastName">
                        <Form.Label className="labels">Last name</Form.Label>
                        <Form.Control className="align-self-center" type="text" placeholder="Last name"/>
                        </Form.Group>

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
export default CreateAccountForm;