import React, { Component } from 'react';
import PropTypes from 'prop-types';

// React-Toolbox Components
import Input from 'react-toolbox/lib/input';
import Button from 'react-toolbox/lib/button/Button';
import Card from 'react-toolbox/lib/card/Card';
import CardMedia from 'react-toolbox/lib/card/CardMedia';
import CardText from 'react-toolbox/lib/card/CardText';
import CardTitle from 'react-toolbox/lib/card/CardTitle';
import CardActions from 'react-toolbox/lib/card/CardActions';

function MovieCard(props) {
    return (
        <Card key={props.id}
        className='movieCard'>
            <CardMedia aspectRatio="wide" image="https://placeimg.com/800/450/nature" />
            <CardTitle title={props.title} />
            <CardText>{props.description}</CardText>
            <CardActions>
                <Button label="Checkout" onClick={props.toggleCheckout.bind(this, "showCheckout")} />
            </CardActions>
        </Card>
    );
}

MovieCard.PropTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    toggleCheckout: PropTypes.func.isRequired,
}

export { MovieCard };