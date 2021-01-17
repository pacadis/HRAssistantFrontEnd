
import React from "react"
import photo from "../img/companyDefaultPhoto.jpg"

export default class DefaultCompanyDashboard extends React.Component{

    render(){
        return (
            <div>
                <div className="card text-center w-75" style={{opacity: ".75", margin: "auto", float: "none", marginTop: "100px", marginBottom: "200px"}}>
                <div className="card-header">
                    Bine ați venit, {localStorage.getItem("name")}!
                </div>
                <div className="card-body">
                    <h5 className="card-title">Asistentul este aici pentru a te ajuta.</h5>
    
                        <img className="img-fluid" src={photo}></img>
    
                    <p className="card-text">În stânga paginii aveți urmatoarele opțiuni:
                    <br></br>- puteți gestiona conturile anagajaților existenți
                    <br></br>- puteți vizualiza și gestiona cererile trimise de către angajați
                    <br></br>- puteți crea conturi pentru angajații nou-veniți</p>
                    <a href="#" className="btn btn-primary">Exploatează asistentul la maxim!</a>
                </div>
                <div className="card-footer text-muted">
                    Pentru sugestii și probleme, <a href="/contact" className="btn btn-primary">contactează-ne</a>
                </div>
                </div>
    
                <br></br>
            </div>
            )
    }

}