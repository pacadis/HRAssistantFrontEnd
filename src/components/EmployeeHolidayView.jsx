import React from "react";

export default class EmployeeHolidayView extends React.Component{

    constructor(){
        super();
        this.state = {
            holiday: []
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
        console.log(holiday);
        var { type, fromDate, toDate, proxyName} = holiday;
        return(
            <table className="table table-condensed table-responsive table-inverse table-light table-hovered align-self-center" style={{width: "auto", height:"auto"}}>
                <thead>
                <tr>
                    <th scope="col" colSpan="2" className="text-center text-white" style={{backgroundColor: "#1c1e2a", width: "300px"}}>Vizulizare concediu: </th>
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

    render(){
        return (
            <div className="card-deck row justify-content-center d-flex align-items-center align-middle mt-5 col-auto">
                {this.renderHoliday(this.state.holiday)}
            </div>
        );
    }
}

