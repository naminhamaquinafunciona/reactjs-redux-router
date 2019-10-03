import React from "react";
import logo from "../styles/logo.svg";
import "../styles/App.css";
import AppTemplate from '../components/templates/app'
import Header from '../components/header'
import Button from '../components/button'
class About extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: ''
    }
    this.changeUserName = this.changeUserName.bind(this)
    this.handleChangeName = this.handleChangeName.bind(this)
  }

  changeUserName(event) {
    this.setState({ userName: event.target.value });
  }

  handleChangeName() {
    this.props.updateUserName(this.state.userName)
  }

  render() {
    return (
      <AppTemplate>
        <Header>
          <img src={logo} className="App-logo" alt="logo" />
          <p>Este é a página que você deve escrever sobre você</p>
          <p>Eu sou um {this.props.user.employerInfo.carrer}</p>
          <p>Esse é o {this.props.user.personalInfo.name}</p>
          <div>
            <h1>Mudar nome do usuário</h1>
            <div>
              <input type="text" placeholder="digite o novo usuário" onChange={this.changeUserName} value={this.state.userName}></input>
              <Button type="button" handleChangeName={this.handleChangeName} text="Mudar nome"/>
            </div>
          </div>
        </Header>
      </AppTemplate>
    );
  }
}

export default About;
