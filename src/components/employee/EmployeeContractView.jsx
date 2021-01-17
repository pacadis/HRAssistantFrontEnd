import React from "react";

export default class EmployeeContractView extends React.Component{

    constructor(){
        super();
        this.state = {
            contract: []
        };

        this.renderContract = this.renderContract.bind(this);

        const payload = {
            username: localStorage.getItem('username')
            
        }

        fetch('http://localhost:8080/hr/viewContract/' + payload.username, {
            method: 'GET',
            headers: {
                'Accept' : 'application/json',
                'Content-type':'application/json'
            }
        })
            .then(res => {
                if (res.status === 200) {
                    res.json().then(json =>{
                        this.setState({contract: json});
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

    renderContract = (contract) => {
        var { firstName, lastName, grossSalary, hireDate, type, duration, expirationDate , cnp} = contract;
        if(expirationDate == null){
            expirationDate= "-" 
        }
        return(
         <table className="table table-condensed table-responsive table-inverse table-light table-hovered align-self-center" style={{width: "auto", height:"auto"}}>
                <thead >
                <tr className="text-center text-white" style={{backgroundColor: "#1c1e2a"}} >
                    <th scope="col" style={{width: "300px"}}>Detalii contract: </th>
                    <th scope="col" style={{width: "300px"}}> {lastName} {firstName} </th>  
                    
                </tr>
                </thead>
                <tbody>
                <tr >
                    <th scope="row">Prenume: </th>
                    <td className="align-middle">{firstName}</td>
                </tr>
                <tr>
                    <th scope="row">Nume: </th>
                    <td className="align-middle">{lastName}</td>
                </tr>
                <tr>
                    <th scope="row">Salariu: </th>
                    <td className="align-middle">{grossSalary}</td>
                </tr>
                <tr>
                    <th scope="row">Data angajarii: </th>
                    <td className="align-middle">{hireDate}</td>
                </tr>
                <tr>
                    <th scope="row">Tip angajare: </th>
                    <td className="align-middle">{type}</td>
                </tr>
                <tr>
                    <th scope="row">Durata: </th>
                    <td className="align-middle"> {duration}</td>
                </tr>
                <tr>
                    <th scope="row">Data expirare: </th>
                    <td className="align-middle">{expirationDate}</td>
                </tr>
                <tr>
                    <th scope="row">CNP: </th>
                    <td className="align-middle">{cnp}</td>
                </tr>

                </tbody>
            </table>
           
        )
    }

    render(){
        return (
                <div className="card-deck row justify-content-center d-flex align-items-center align-middle mt-5 col-auto">
                    {this.renderContract(this.state.contract)}
                </div>
              
        );
    }
}

