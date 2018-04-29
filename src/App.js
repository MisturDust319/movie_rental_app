import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { LoginScreen } from './components/LoginScreen.js';
import { AddUserScreen } from './components/AddUserScreen.js';
import { MenuBar } from './components/MenuBar.js';
import { MovieCard } from './components/MovieCard.js';

class App extends Component {

  constructor() {
    super();
    
    this.state = {
      username: "",
      newUsername: "",
      isLoggedIn: false,
      query: "",
      searchBy: "title",
      showFilterPanel: false,
    }

    // bind functions
    this.handleChange = this.handleChange.bind(this);
    this.getValue = this.getValue.bind(this);
    this.login = this.login.bind(this);
    this.addUser = this.addUser.bind(this);
    this.searchMovies = this.searchMovies.bind(this);
    this.showFilters = this.showFilters.bind(this);
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

  logout = () => {
    this.setState({
      isLoggedIn: false,
    })
  }

  addUser = () => {
    this.setState({
      username: this.state.newUsername
    })
  }

  searchMovies = () => {
    alert(`This is a stub: Search ${this.state.query} By ${this.state.searchBy}`);
  }

  showFilters = () => {
    alert("This be a stub to show the olde fylters");
    this.setState({
      showFilterPanel: !this.state.showFilterPanel,
    })
  }

  render() {
    return (
      <div className="App">
        <MovieCard />
        <MenuBar handleChange={this.handleChange}
          getValue={this.getValue} 
          searchMovies={this.searchMovies}
          logout={this.logout}
          showFilters={this.showFilters}/>
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
