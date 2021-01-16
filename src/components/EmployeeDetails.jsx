import React,  { useState }  from "react";
import DatePicker from "react-datepicker";

export default class EmployeeDetails extends React.Component{
    constructor(){
        super();
        this.state = {
            
        };

        this.renderDetails = this.renderDetails.bind(this);
        
        const payload = {
            // username: localStorage.getItem('username'),
        }

        fetch('http://localhost:8080/hr/employee/' + payload.username, {
            method: 'GET',
            headers: {
                'Accept' : 'application/json',
                'Content-type':'application/json'
            }
        })
            .then(res => {
                if (res.status === 200) {
                    res.json().then(json =>{
                        this.setState({salary: json});
                    });
                    console.log(payload.username)
                    // LOGIN PERSISTANCE
                }
                else {
                    console.log("error")
                    console.log(payload.username)
                }
            })
    }

    renderSalary = (salary) => {
        var {year, month, brutSalary, netSalary, workedHours, requiredHours} = salary;

        return(
            
            <table className="table table-condensed table-responsive table-inverse table-light table-hovered align-self-center" style={{width: "auto", height:"auto"}}>
                <thead>
                <tr>
                    <th scope="col" colSpan="2" className="text-center text-white" style={{backgroundColor: "#1c1e2a", width: "300px"}} >Edit angajat: {localStorage.getItem('username')}   </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">Nume utilizator: </th>
                    <td>{year}</td>
                </tr>
                <tr>
                    <th scope="row">Parola: </th>
                    <td>{month}</td>
                </tr>
                <tr>
                    <th scope="row">Nume: </th>
                    <td>{brutSalary}</td>
                </tr>
                <tr>
                    <th scope="row">Prenume: </th>
                    <td>{netSalary}</td>
                </tr>
                <tr>
                    <th scope="row">Salariu: </th>
                    <td>{workedHours}</td>
                </tr>
                <tr>
                    <th scope="row">Data angajarii: </th>
                    <td>{requiredHours}</td>
                </tr>

                <tr>
                    <th scope="row">Tip angajare: </th>
                    <td>{brutSalary}</td>
                </tr>
                <tr>
                    <th scope="row">Durata: </th>
                    <td>{netSalary}</td>
                </tr>
                <tr>
                    <th scope="row">Data expirare: </th>
                    <td>{workedHours}</td>
                </tr>
                <tr>
                    <th scope="row">CNP: </th>
                    <td>{requiredHours}</td>
                </tr>
               

                </tbody>
            </table>
        )
    }

    render(){
        return (
            
        <div className="card-deck row justify-content-center d-flex align-items-center align-middle mt-5 col-auto">
            
            {this.renderSalary(this.state.salary)}
            
        </div>
    
        );
    }
}

