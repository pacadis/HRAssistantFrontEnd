import Joi from 'joi-browser'
import Form from "../common/form";
import React from "react";

class LoginForm extends Form {
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
    }

    render() {
        return (
            <div>
                <h1 align={"center"}>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('username', "Username","text","Username")}
                    {this.renderInput('password', "Password: ","password", "Password")}
                    {this.renderButton("Login")}
                </form>
            </div>
        )
    }
}
export default LoginForm;