import React, { Component } from 'react';
import PropTypes from 'prop-types';

// React-Toolbox Components
import Input from 'react-toolbox/lib/input';
import Button from 'react-toolbox/lib/button/Button';

function LoginScreen(props) {
    return (
        <section>
            <Input type='text' label='Username' name='username' value={props.getValue("username")} onChange={props.handleChange.bind(this, 'username')} maxLength={30} />
            <Input type='password' label='Password' name='password' value={props.getValue("password")} onChange={props.handleChange.bind(this, 'password')}  />
            <Button onClick={props.login} label="Login" raised/>
        </section>
    );
}

LoginScreen.propTypes = {
    handleChange: PropTypes.func.isRequired,
    getValue: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
}

export { LoginScreen };