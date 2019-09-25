import React from "react";
import logo from "../styles/logo.svg";
import "../styles/App.css";

function About(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {console.log(props)}
        <p>Este é a página que você deve escrever sobre você</p>
        <p>Eu sou um {props.user.employerInfo.carrer}</p>
        <p>Esse é o {props.user.personalInfo.name}</p>
      </header>
    </div>
  );
}

export default About;
