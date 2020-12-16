import React from 'react';
import Joi from 'joi-browser'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NavBar from './navbar';

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
        const payload = {
            name: this.state.account.name,
            address: this.state.account.address,
            username: this.state.account.username,
            password: this.state.account.password,
            description: this.state.account.description
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
                    alert("Welcome to our page! ")
                }
                else if (res.status === 401) {
                    alert("Username already exist!")
                    this.setState({
                        account : {name: "", address: "", username: "", password: "", confirm: "", description: ""}
                    })
                }
            })
        console.log('Submitted');
    }

    render() {
        document.body.classList = "";
        document.body.classList.add("background-general");
        return (
            <div className="background-general">
            <NavBar/>
            <div className="d-flex justify-content-center align-items-center" style={{height:"123vh", marginTop:"210px"}}>
                <Form className="d-flex flex-column borderedform border rounded border-secondary custom-container" style={{width:"40%"}}>
                    <h2 className="align-self-center" style={{textAlign:"center"}}>Register your company</h2>
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
                        <Form.Label className="labels">Confirm password</Form.Label>
                        <Form.Control className="align-self-center" type="password" placeholder="Confirm password"/>
                        </Form.Group>
                        <Button className="align-self-center mybtn">
                        SUBMIT
                        </Button>
                </Form>
            </div>
            </div>
        )
    }
}
export default RegisterForm;
