import React from "react";
import NavBar from '../utils/navbar';
import photo from '../../img/homePagePhoto.jpg'

class HomePage extends React.Component{
  render() {
    document.body.classList = "";
    document.body.classList.add("background-general");
    return (
      <div>
        <NavBar/>
        <div className="card text-center w-75" style={{opacity: ".95", margin: "auto", float: "none", marginTop: "200px", marginBottom: "200px"}}>
          <div className="card-header">
            Bine ați venit
          </div>
          <div className="card-body">
            <h5 className="card-title">Asistentul tău este aici 24/7 pentru a-ți oferi toate informațiile 
                de care ai nevoie în cadrul unei organizații.</h5>

                <img className="img-fluid" src={photo}></img>

            <p className="card-text">Loghează-te sau înregistrează-te! După etapa de logare vei afla mai multe detalii despre utilizarea platformei noastre în funție de tipul utilizatorului care te reprezintă: 
                administrator companie sau angajat.</p>
            <a href="/register" className="btn btn-primary">Crează-ți un cont acum!</a>
          </div>
          <div className="card-footer text-muted">
            Pentru sugestii și probleme, <a href="/contact" className="btn btn-primary">contactează-ne</a>
          </div>
        </div>

        <br></br>

      </div>
    );
  }
};

export default HomePage;