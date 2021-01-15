import React,  { useState }  from "react";
import DatePicker from "react-datepicker";

export default class EmployeePayslipView extends React.Component{
    constructor(){
        super();
        this.state = {
            salary: []
        };

        this.renderSalary = this.renderSalary.bind(this);
        
        const payload = {
            username: localStorage.getItem('username'),
            year: new Date().getFullYear(),
            month: new Date().getMonth()+1  
        }

        fetch('http://localhost:8080/hr/viewPayslip/' + payload.username + '/' + payload.year + '/' + payload.month, {
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
                    <th scope="col" colSpan="2" className="text-center text-white" style={{backgroundColor: "#1c1e2a", width: "300px"}} >Fluturas salariu:   </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">An: </th>
                    <td>{year}</td>
                </tr>
                <tr>
                    <th scope="row">Luna: </th>
                    <td>{month}</td>
                </tr>
                <tr>
                    <th scope="row">Salariu brut: </th>
                    <td>{brutSalary}</td>
                </tr>
                <tr>
                    <th scope="row">Salariu net: </th>
                    <td>{netSalary}</td>
                </tr>
                <tr>
                    <th scope="row">Ore lucrate: </th>
                    <td>{workedHours}</td>
                </tr>
                <tr>
                    <th scope="row">Ore cerute: </th>
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

