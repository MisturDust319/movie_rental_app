import React, { Component } from 'react';
import Button from 'react-toolbox/lib/button/Button';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button raised primary>Hi!</Button>
        <Button>Another Button</Button>
      </div>
    );
  }
}

export default App;
