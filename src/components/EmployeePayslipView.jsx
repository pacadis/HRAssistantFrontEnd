import React from "react";

export default class EmployeePayslipView extends React.Component{
    constructor(){
        super();
        this.state = {
            salary: [],
            salaryShown: [],
            finalSalary: []
        };

        this.renderSalary = this.renderSalary.bind(this);
        
        const payload = {
            username: localStorage.getItem('username')
         
        }

        fetch('http://localhost:8080/hr/viewPayslip/' + payload.username , {
            method: 'GET',
            headers: {
                'Accept' : 'application/json',
                'Content-type':'application/json'
            }
        })
            .then(res => {
                if (res.status === 200) {
                    res.json().then(json =>{
                        this.setState({salary: json, salaryShown: json});
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
       console.log(this.state.salary);
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

    handleChange = (event) => {
        
        const filterCriteria = event.target.value
        let allSalary = [];
        for(var i = 0; i < this.state.salary.length; i ++){
            if(this.state.salary[i].year.startsWith(filterCriteria))
            allSalary.push(this.state.salary[i])
        }
        this.setState({salaryShown: allSalary})

    }

    handleChangeMonth = (event) => {
        
        const filterCriteria = event.target.value
        let allSalary = [];
        for(var i = 0; i < this.state.salaryShown.length; i ++){
            if(this.state.salaryShown[i].month.startsWith(filterCriteria))
            allSalary.push(this.state.salaryShown[i])
        }
        this.setState({finalSalary: allSalary})

    }

    render(){
        return (
            <div className="card-deck row justify-content-center d-flex align-items-center align-middle mt-5 col-auto">
            <input type="text" onChange={this.handleChange} placeholder="An" />
            <input type="text" onChange={this.handleChangeMonth} placeholder="Luna" />
            {this.state.finalSalary.map(salary => {
               return <div> {this.renderSalary(salary)} <br></br> </div>
           })}
       </div>
    
        );
    }
}

