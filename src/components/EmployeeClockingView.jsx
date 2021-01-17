import React from "react";

export default class EmployeeClockingView extends React.Component{

    constructor(){
        super();
        this.state = {
            pontaj: [],
            pontajShown: [], 
            pontajeFinale: []
        };

        this.renderPontaj = this.renderPontaj.bind(this);

        const payload = {
            username: localStorage.getItem('username'),
            
        }

        fetch('http://localhost:8080/hr/viewClocking/' + payload.username , {
            method: 'GET',
            headers: {
                'Accept' : 'application/json',
                'Content-type':'application/json'
            }
        })
            .then(res => {
                if (res.status === 200) {
                    res.json().then(json =>{
                        this.setState({pontaj: json, pontajShown: json});
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

    renderPontaj = (pontaj) => {
        const {year, month, workedHours, requiredHours, overtimeHours, overtimeLeave } = pontaj ;
        console.log(pontaj);
        return(
            <table className="table table-condensed table-responsive table-inverse table-light table-hovered align-self-center" style={{width: "auto", height:"auto"}}>
                <thead>
                <tr>
                    <th scope="col" colSpan="2" className="text-center text-white" style={{backgroundColor: "#1c1e2a", width: "300px"}}>Detalii pontaj:  </th>
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
                    <th scope="row">Ore lucrate: </th>
                    <td>{workedHours}</td>
                </tr>
                <tr>
                    <th scope="row">Ore cerute: </th>
                    <td>{requiredHours}</td>
                </tr>
                <tr>
                    <th scope="row">Ore suplimentare: </th>
                    <td>{overtimeHours}</td>
                </tr>
                <tr>
                    <th scope="row">Concediu avans: </th>
                    <td>{overtimeLeave}</td>
                </tr>
               

                </tbody>
            </table>
        )
    }

    handleChange = (event) => {
        
        const filterCriteria = event.target.value
        let allPontaj = [];
        for(var i = 0; i < this.state.pontaj.length; i ++){
            if(this.state.pontaj[i].year.startsWith(filterCriteria))
            allPontaj.push(this.state.pontaj[i])
        }
        this.setState({pontajShown: allPontaj})

    }

    handleChangeMonth = (event) => {
        
        const filterCriteria = event.target.value
        let allPontaj = [];
        for(var i = 0; i < this.state.pontajShown.length; i ++){
            if(this.state.pontajShown[i].month.startsWith(filterCriteria))
            allPontaj.push(this.state.pontajShown[i])
        }
        this.setState({pontajeFinale: allPontaj})

    }

    render(){
        return (
            <div className="card-deck row justify-content-center d-flex align-items-center align-middle mt-5 col-auto">
                 <input type="text" onChange={this.handleChange} placeholder="An" />
                 <input type="text" onChange={this.handleChangeMonth} placeholder="Luna" />
                 {this.state.pontajeFinale.map(pontaj => {
                    return <div> {this.renderPontaj(pontaj)} <br></br> </div>
                })}
            </div>
        );
    }
}

