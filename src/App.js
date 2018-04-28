import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { LoginScreen } from './components/LoginScreen.js';
import { AddUserScreen } from './components/AddUserScreen.js';

class App extends Component {

  constructor() {
    super();
    
    this.state = {
      username: "",
      newUsername: "",
      isLoggedIn: false,
    }

    // bind functions
    this.handleChange = this.handleChange.bind(this);
    this.getValue = this.getValue.bind(this);
    this.login = this.login.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  handleChange = (name, value) => {
    this.setState({...this.setState, [name]: value});
  }

  getValue = (value) => {
    return this.state[value];
  }

  login = () => {
    this.setState({
      isLoggedIn: true,
    })
  }

  addUser = () => {
    this.setState({
      username: this.state.newUsername
    })
  }

  render() {
    return (
      <div className="App">
        <LoginScreen handleChange={this.handleChange}
          getValue={this.getValue}
          login={this.login}/>
        <AddUserScreen handleChange={this.handleChange}
          getValue={this.getValue}
          login={this.addUser}/>
      </div>
    );
  }
}

export default App;
