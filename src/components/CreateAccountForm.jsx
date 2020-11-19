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
        //Call the server
        console.log('Submitted');
    }

    render() {
        return (
            <div className="createaccountbg">
                <div className="createaccountdiv">
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
            </div>
        )
    }
}
export default CreateAccountForm;