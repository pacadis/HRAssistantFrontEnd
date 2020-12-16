import React from "react";
import NavBar from "./navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class ContactForm extends React.Component{
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            message: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.doSubmit = this.doSubmit.bind(this);
    }

    doSubmit = () => {
        const payload = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }
        fetch('http://localhost:8080/hr/contact', {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-type':'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(res => {
                if (res.status === 200) {
                    alert("Message has been submitted!")
                    this.props.history.replace("/");
                }
                else {
                    alert("Error!")
                }
            })
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
                        <h2 className="align-self-center">Contact us</h2>
                        <hr/>
                        <Form.Group controlId="formName">
                            <Form.Label className="labels">Name</Form.Label>
                            <Form.Control className="align-self-center" name="name" type="text" placeholder="Name" onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            <Form.Label className="labels">Email</Form.Label>
                            <Form.Control className="align-self-center" name="email" type="mail" placeholder="E-mail" onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group controlId="formMessage">
                            <Form.Label className="labels">Message</Form.Label>
                            <Form.Control className="align-self-center" as="textarea" rows={5} name="message" type="text" placeholder="Message" onChange={this.handleChange}/>
                        </Form.Group>

                        <Button className="align-self-center mybtn" onClick={this.doSubmit}>
                            SUBMIT
                        </Button>
                    </Form>
                </div>
            </div>
        )
    }
};