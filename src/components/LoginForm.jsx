import Joi from 'joi-browser'
import Form from "../common/form";
import React, { Component } from "react";



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
            <div className="loginbg">
                <div className="logindiv">  
                    <h1 align={"center"}>Login</h1>
                    <form onSubmit={this.handleSubmit}>
                        {this.renderInput('username', "Username: ","text","Username")}
                        {this.renderInput('password', "Password: ","password", "Password")}
                        {this.renderButton("Login")}
                    </form>
                </div>
            </div>
        )
    }
}
export default LoginForm;