import React, { Component } from 'react';
import PropTypes from 'prop-types';

// React-Toolbox Components
import Input from 'react-toolbox/lib/input';
import Button from 'react-toolbox/lib/button/Button';

function AddUserScreen(props) {
    return (
        <section>
            <h1>Create New Account</h1>
            <Input type='email' label='E-Mail' name='email' value={props.getValue("email")} onChange={props.handleChange.bind(this, 'email')} maxLength={30} />
            <Input type='text' label='Username' name='newUsername' value={props.getValue("newUsername")} onChange={props.handleChange.bind(this, 'newUsername')} maxsLength={30} />
            <Input type='password' label='Password' name='newPassword' value={props.getValue("newPassword")} onChange={props.handleChange.bind(this, 'newPassword')}  />
            <Button onClick={props.login} label="Create Account" raised/>
        </section>
    );
}

AddUserScreen.propTypes = {
    handleChange: PropTypes.func.isRequired,
    getValue: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
}

export { AddUserScreen };