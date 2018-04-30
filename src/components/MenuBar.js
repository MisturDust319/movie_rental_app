import React, { Component } from 'react';
import PropTypes from 'prop-types';

// React-Toolbox Components
import Input from 'react-toolbox/lib/input';
import Button from 'react-toolbox/lib/button/Button';
//import AppBar from 'react-toolbox/lib/app_bar';
import Dropdown from 'react-toolbox/lib/dropdown';

const searchOptions = [
    { value: 'title', label: 'Title'},
    { value: 'genre', label: 'Genre'},
    { value: 'mood', label: 'Mood'},
    { value: 'actor', label: 'Actor'},
    { value: 'director', label: 'Director'},
    { value: 'theme', label: 'Theme'},
];

function MenuBar(props) {
    let toggleText = () => {
        if(props.getValue("showFilterPanel")) {
            return "Hide Filters";
        }
        else {
            return "Show Filters";
        }
    }

    return (
        <header className='menuBar'>
            <h1>RENTR</h1>
            <span class='search'>
                <Input type='text' label='Search' name='query' value={props.getValue("query")} onChange={props.handleChange.bind(this, 'query')} maxLength={30} 
                className='searchBar'/>
                <Dropdown auto onChange={props.handleChange.bind(this, 'searchBy')} source={searchOptions} value={props.getValue('searchBy')}
                className='searchBy'/>
                <Button label="Search..." onClick={props.searchMovies} raised
                className='searchButton'/>
                <Button label={toggleText()} onClick={props.showFilters} raised />
            </span>
            <Button label="Logout" onClick={props.logout} raised 
            className='logoutButton'/>
        </header>
    );
}

MenuBar.PropTypes = {
    getValue: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    searchMovies: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired
}

export { MenuBar };