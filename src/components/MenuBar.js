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
    return (
        <header>
            <h1>RENTR</h1>
            <Input type='text' label='Search' name='query' value={props.getValue("query")} onChange={props.handleChange.bind(this, 'query')} maxLength={30} />
            <Dropdown auto onChange={props.handleChange.bind(this, 'searchBy')} source={searchOptions} value={props.getValue('searchBy')} />
            <Button label="Search..." onClick={props.searchMovies} raised/>
        </header>
    );
}

MenuBar.PropTypes = {
    getValue: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    searchMovies: PropTypes.func.isRequired,
}

export { MenuBar };