import React from "react";
import NavBar from "./navbar";

export default class ContactPage extends React.Component{
    render() {
        document.body.classList = "";
        document.body.classList.add("background-general");
        return (
            <div>
                <NavBar/>
                <hr/>
                <hr/>
                <hr/>
                <hr/>
                <hr/>
                <hr/>
                <h1>ContactPage</h1>
            </div>
        );
    }
};