import React, { Component } from 'react';
import Joi from 'joi-browser'
import Form from "../common/form";

class RegisterForm extends Form {
    state = {
        account: {name: "",address: "",username: "", password: "",confirm: "", description: ""},
        errors: {}
    };

    schema = {
        name: Joi
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
            .label("Confirm Password"),
        description: Joi
            .string()
            .required()
            .label("Decription")
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
        return (
            <div className="registerbg">
                <div className="registerdiv">
                    <h1 align={"center"}>Register your Company</h1>
                    <h2 align={"center"}>SIGN UP</h2>
                    <form onSubmit={this.handleSubmit} >
                        {this.renderInput('name', "Company name: ","text","Enter your company name")}
                        {this.renderInput('address', "Address: ","text","Enter address company")}
                        {this.renderInput('username', "Username: ","text","Enter username")}
                        {this.renderInput('password', "Password: ","password", "Enter password")}
                        {this.renderInput('confirm', "Confirm password: ","password", "Confirm password")}
                        {this.renderInput('description', "Description: ","description", "Description")}
                        {this.renderButton("Register")}
                    </form>
                </div>
            </div>
        )
    }
}
export default RegisterForm;
