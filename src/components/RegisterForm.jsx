import React, { Component } from 'react';
import Joi from 'joi-browser'
import Form from "../common/form";

class RegisterForm extends Form {
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
            .label("Confirm Password")

    };

    doSubmit = () => {
        //Call the server
        console.log('Submitted');
        this.props.history.replace("/")
    }

    render() {
        return (
            <div className="registerbg">
                <div className="registerdiv">
                    <h1 align={"center"}>Register your Company</h1>
                    <h2 align={"center"}>SIGN UP</h2>
                    <form onSubmit={this.handleSubmit} >
                        {this.renderInput('companyName', "Company name: ","text","Enter your company name")}
                        {this.renderInput('address', "Address: ","text","Enter address company")}
                        {this.renderInput('username', "Username: ","text","Enter username")}
                        {this.renderInput('password', "Password: ","password", "Enter password")}
                        {this.renderInput('confirm', "Confirm password: ","password", "Confirm password")}
                        {this.renderButton("Register")}
                    </form>
                </div>
            </div>
        )
    }
}
export default RegisterForm;
