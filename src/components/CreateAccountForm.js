import React from 'react';
import Joi from 'joi-browser'
import Form from "../common/form";

class CreateAccountForm extends Form {
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
        const payload = {
            firstName: this.state.account.firstName,
            lastName: this.state.account.lastName,
            username: this.state.account.username,
            password: this.state.account.password
        }
        fetch('http://localhost:8080/hr/createAccount', {
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
                else if (res.status === 401) {
                    alert("Username already exist!")
                    this.setState({
                        account : {firstName: "", lastName: "", username: "", password: ""}
                    })
                }
            })
        console.log('Submitted');
    }

    render() {
        return (
            <div>
                <h1 align={"center"}>Create employee account</h1>
                <h2 align={"center"}>SIGN UP</h2>
                <form onSubmit={this.handleSubmit} >
                    {this.renderInput('firstName', "First Name: ","text","Enter first name")}
                    {this.renderInput('lastName', "Last Name: ","text","Enter last name")}
                    {this.renderInput('username', "Username: ","text","Enter username")}
                    {this.renderInput('password', "Password: ","password", "Enter password")}
                    {this.renderButton("CREATE")}
                </form>
            </div>
        )
    }
}
export default CreateAccountForm;