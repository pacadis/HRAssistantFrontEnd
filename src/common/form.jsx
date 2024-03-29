import React, {Component} from "react";
import Joi from 'joi-browser'
import Input from "./input";

class Form extends Component{
    state = {
        account: {},
        errors: {}
    };

    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({errors: errors || {}});
        if (errors) return;

        this.doSubmit();

    };

    validate = () => {
        const options = {abortEarly: false};
        const {error} = Joi.validate(this.state.account, this.schema, options);
        if (!error) return null;

        const errors = {};
        for (let item of error.details)
            errors[item.path[0]] = item.message;
        return errors;
    };

    validateProperty = ({name, value}) => {

        const obj = {[name]: value};
        const schema = {[name]: this.schema[name] };
        const {error} = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    }


    handleChange = ({currentTarget: input }) => {
        const errors = {...this.state.errors}
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const account = {...this.state.account};
        account[input.name] = input.value;

        this.setState({account, errors});
    };

    renderButton(label) {
        return (
            <button className="mybtn"> {label}
            </button>
    );
    }

    renderInput(name, label, type = "text",placeholder) {
        const { account,errors } = this.state;
        return (
        <Input
            type={type}
            name={name}
            placeholder={placeholder}
            value={account[name]}
            label = {label}
            onChange={this.handleChange}
            error={errors[name]}
        />
        )
    }

}

export default Form;