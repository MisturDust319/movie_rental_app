import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {LoginScreen} from './components/LoginScreen.js';

class App extends Component {

  constructor() {
    super();
    
    this.state = {
      username: "",
    }

    // bind functions
    this.handleChange = this.handleChange.bind(this);
    this.getValue = this.getValue.bind(this);
  }

  handleChange = (name, value) => {
    this.setState({...this.setState, [name]: value});
  }

  getValue = (value) => {
    return this.state[value];
  }

  render() {
    return (
      <div className="App">
        <section>
        <LoginScreen handleChange={this.handleChange}
        getValue={this.getValue}/>
        </section>
      </div>
    );
  }
}

export default App;
