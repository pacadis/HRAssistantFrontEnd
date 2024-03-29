import React from "react";

export default class EmployeeHolidayView extends React.Component{

    constructor(){
        super();
        this.state = {
            holiday: [],
            holidayShown: []
        };

        this.renderHoliday = this.renderHoliday.bind(this);

        const payload = {
            username: localStorage.getItem('username')
            
        }

        fetch('http://localhost:8080/hr/viewHoliday/' + payload.username, {
            method: 'GET',
            headers: {
                'Accept' : 'application/json',
                'Content-type':'application/json'
            }
        })
            .then(res => {
                if (res.status === 200) {
                    res.json().then(json =>{
                        this.setState({holiday: json});
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

    renderHoliday = (holiday) => {
        var { type, fromDate, toDate, proxyName} = holiday;
        return(
            <table className="table table-condensed table-responsive table-inverse table-light table-hovered align-self-center mr-5 w-auto" style={{width: "auto", height:"auto"}}>
                <thead>
                <tr>
                    <th scope="col" colSpan="2" className="text-center text-white" style={{backgroundColor: "#1c1e2a"}}>Vizulizare concediu: </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">Tip concediu: </th>
                    <td>{type}</td>
                </tr>
                <tr>
                    <th scope="row">Data inceput: </th>
                    <td>{fromDate}</td>
                </tr>
                <tr>
                    <th scope="row">Data sfarsit: </th>
                    <td>{toDate}</td>
                </tr>
                <tr>
                    <th scope="row">Nume inlocuitor: </th>
                    <td>{proxyName}</td>
                </tr>
               

                </tbody>
            </table>
        )
    }

    handleChange = (event) => {
        
        const filterCriteria = event.target.value
        let allHolidays = [];
        for(var i = 0; i < this.state.holiday.length; i ++){
            console.log(this.state.holiday[i].fromDate);
            if(this.state.holiday[i].fromDate.startsWith(filterCriteria))
                allHolidays.push(this.state.holiday[i])
        }
        this.setState({holidayShown: allHolidays})

    }

    render(){
        return (
            <div className="card-deck column justify-content-center d-block align-items-center align-middle mt-5 col-auto">
                
                <div className="card-deck row justify-content-center d-flex align-items-center align-middle mt-5 col-auto">
                    <input type="text" onChange={this.handleChange} placeholder="An" />
                </div>
                <br></br>
                <div className="card-deck row justify-content-center d-flex align-items-center align-middle mt-5 col-auto">
                    {this.state.holidayShown.map(holiday => {
                        return <div> {this.renderHoliday(holiday)} <br></br> </div>
                    })}
                </div>
            </div>
        );
    }
}

