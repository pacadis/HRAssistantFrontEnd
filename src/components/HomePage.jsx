import React from "react";
import NavBar from './navbar';

class HomePage extends React.Component{
  render() {
    document.body.classList = "";
    document.body.classList.add("background-general");
    return (
      <div>
        <NavBar/>
        <h1>Acasa</h1>
      </div>
    );
  }
};

export default HomePage;