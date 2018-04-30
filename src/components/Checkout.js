import React, { Component } from 'react';
import PropTypes from 'prop-types';

// React-Toolbox Components
import Input from 'react-toolbox/lib/input';
import Button from 'react-toolbox/lib/button/Button';
import Drawer from 'react-toolbox/lib/drawer';

function Checkout(props) {

    let closeDialog = () => {
        props.toggleCheckout("showCheckout");
    }

    return (
        <Drawer label="Checkout"
            active={props.getValue("showCheckout")}
            onEscKeyDown={closeDialog}
            onOverlayClick={closeDialog}
        className='checkoutPanel'>
            <h2>Lorem Ipsum</h2>
            <p>Please input your charge card number</p>
            <Input type='text'
                label='Card info' name='cardInfo'
                value={props.getValue("cardInfo")}
                onChange={props.handleChange.bind(this, 'cardInfo')} />
            <Button onClick={closeDialog} label="Checkout" raised/>
        </Drawer>
    );
}

Checkout.PropTypes = {
    getValue: PropTypes.func.isRequired,
    toggleCheckout: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
}

export default Checkout;