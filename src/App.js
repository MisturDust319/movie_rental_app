import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {LoginScreen} from './components/LoginScreen.js';

class App extends Component {

  constructor() {
    super();
    
    this.state = {
      username: "",
      isLoggedIn: false,
    }

    // bind functions
    this.handleChange = this.handleChange.bind(this);
    this.getValue = this.getValue.bind(this);
    this.login = this.login.bind(this);
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

  render() {
    return (
      <div className="App">
        <LoginScreen handleChange={this.handleChange}
        getValue={this.getValue}
        login={this.login}/>
      </div>
    );
  }
}

export default App;
