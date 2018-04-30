import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { LoginScreen } from './components/LoginScreen.js';
import { AddUserScreen } from './components/AddUserScreen.js';
import { MenuBar } from './components/MenuBar.js';
import { MovieCard } from './components/MovieCard.js';
import FilterPanel from './components/FilterPanel';
import Checkout from './components/Checkout';

class App extends Component {

  constructor() {
    super();
    
    this.state = {
      username: "",
      newUsername: "",
      isLoggedIn: true,
      query: "",
      searchBy: "title",
      showFilterPanel: false,
      decadeSlider: 0,
      filterByDecade: false,
      filterByPrice: false,
      filterByRating: false,
      minDecade: 1900,
      maxDecade: 2018,
      maxPrice: 20,
      minRating: 0.5,
      maxRating: 5,
      showCheckout: false,
      cardInfo: "",
    }

    // bind functions
    this.handleChange = this.handleChange.bind(this);
    this.getValue = this.getValue.bind(this);
    this.login = this.login.bind(this);
    this.addUser = this.addUser.bind(this);
    this.searchMovies = this.searchMovies.bind(this);
    this.showFilters = this.showFilters.bind(this);
    this.toggleButton = this.toggleButton.bind(this);
    this.renderApp = this.renderApp.bind(this);
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
      username: this.state.newUsername,
      isLoggedIn: true,
    })
  }

  searchMovies = () => {
    alert(`This is a stub: Search ${this.state.query} By ${this.state.searchBy}`);
  }

  showFilters = () => {
    this.setState({
      showFilterPanel: !this.state.showFilterPanel,
    })
  }

  toggleButton = (button) => {
    let newState = {};
    newState[button] = !this.state[button];
    
    this.setState(newState);
  }

  renderApp = (loggedIn) => {
    if(loggedIn) {
      return (
        <div>
          <MenuBar handleChange={this.handleChange}
            getValue={this.getValue} 
            searchMovies={this.searchMovies}
            logout={this.logout}
            showFilters={this.showFilters}/>
        <Checkout getValue={this.getValue}
          toggleCheckout={this.toggleButton}
          handleChange={this.handleChange}/>
        <FilterPanel getValue={this.getValue}
        toggleFilterPanel={this.showFilters}
        handleChange={this.handleChange}
        toggleButton={this.toggleButton}/>
        <MovieCard id="12"
          description="lorem ipsum"
          title="Some Movie"
          toggleCheckout={this.toggleButton}/>
        </div>
      )
    } else {
      return (
        <div className="App">
          <div className="loginScreen">
          <h1>RENTR</h1>
          <LoginScreen handleChange={this.handleChange}
            getValue={this.getValue}
            login={this.login}/>
          <AddUserScreen handleChange={this.handleChange}
            getValue={this.getValue}
            login={this.addUser}/>
          </div>
        </div>
      )
    }
  }

  render() {
    return ( 
      <div>
      {this.renderApp(this.state.isLoggedIn)}
      </div>)
  }
}

export default App;
