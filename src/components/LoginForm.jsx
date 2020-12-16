import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Joi from 'joi-browser'
import NavBar from './navbar';

class LoginForm extends React.Component {

    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            errors: {}
        };
        this.schema = {
            username: Joi.string()
                .required()
                .label('Username'),
            password: Joi
                .string()
                .required()
                .label('Password')
        };
        this.handleChange = this.handleChange.bind(this);
        this.doSubmit = this.doSubmit.bind(this);
    }

    doSubmit = () => {
        const payload = {
            username: this.state.username,
            password: this.state.password
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

                    localStorage.setItem('username', this.state.username)
                    res.json().then(json =>{
                        const { result, name } = json
                        localStorage.setItem('name', name)
                        if (result === "company")
                            this.props.history.push("/companydashboard");
                        if (result === "employee")
                            this.props.history.replace("/employeedashboard")

                    });

                    // LOGIN PERSISTANCE
                }
                else if (res.status === 404) {
                    alert("Username doesn't exist!")
                }
                else if (res.status === 401) {
                    alert("Password is wrong!")
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
            <div>
            <NavBar/>
            <div className="d-flex justify-content-center align-items-center" style={{height:"100vh", marginTop:"100px"}}>
                <Form className="d-flex flex-column borderedform border rounded border-secondary custom-container" style={{width:"40%"}}>
                    <h2 className="align-self-center">Login</h2>
                    <hr/>
                    <Form.Group controlId="formUser">
                        <Form.Label className="labels">Username</Form.Label>
                        <Form.Control className="align-self-center" name="username" type="text" placeholder="Username" onChange={this.handleChange}>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formPassword">
                        <Form.Label className="labels">Password</Form.Label>
                        <Form.Control className="align-self-center" name="password" type="password" placeholder="Password" onChange={this.handleChange}/>
                    </Form.Group>
                    <Button className="align-self-center mybtn" onClick={this.doSubmit}>
                        SUBMIT
                    </Button>
                </Form>
            </div>
            </div>
        )
    }
}

export default LoginForm;

