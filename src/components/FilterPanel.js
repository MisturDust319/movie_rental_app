import React, { Component } from 'react';
import PropTypes from 'prop-types';

// React-Toolbox Components
import Input from 'react-toolbox/lib/input';
import Button from 'react-toolbox/lib/button/Button';
import Drawer from 'react-toolbox/lib/drawer';

function FilterPanel(props) {
    let toggleText = (button) => {
        let state = props.getValue(button);
        if(state) {
            return "On";
        }
        else {
            return "Off";
        }
    }

    return (
        <Drawer active={props.getValue("showFilterPanel")} onOverlayClick={props.toggleFilterPanel}>
            <div>
                <h3>Filter By Decade</h3>
                <Button label={toggleText("filterByDecade")} onClick={props.toggleButton.bind(this, "filterByDecade")} raised />
                <Input type='text' label='Min' name='minDecade' value={props.getValue("minDecade")} onChange={props.handleChange.bind(this, 'minDecade')} maxLength={30} />
                <Input type='text' label='Max' name='maxDecade' value={props.getValue("maxDecade")} onChange={props.handleChange.bind(this, 'maxDecade')} maxLength={30} />
            </div>
            <div>
                <h3>Filter By Price</h3>
                <Button label={toggleText("filterByPrice")} onClick={props.toggleButton.bind(this, "filterByPrice")} raised />
                <Input type='text' label='Max' name='maxPrice' value={props.getValue("maxPrice")} onChange={props.handleChange.bind(this, 'maxPrice')} maxLength={30} />
            </div>
            <div>
                <h3>Filter By Rating</h3>
                <Button label={toggleText("filterByRating")} onClick={props.toggleButton.bind(this, "filterByRating")} raised />
                <Input type='text' label='Min' name='minRating' value={props.getValue("minRating")} onChange={props.handleChange.bind(this, 'minRating')} maxLength={30} />
                <Input type='text' label='Max' name='maxRating' value={props.getValue("maxRating")} onChange={props.handleChange.bind(this, 'maxRating')} maxLength={30} />
            </div>
        </Drawer>
    );
}

FilterPanel.PropTypes = {
    getValue: PropTypes.func.isRequired,
    toggleFilterPanel: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
}

export default FilterPanel;