import React, { Component } from 'react';
import classingr from './BurgerIngredient.css';
import PropTypes from 'prop-types';

class BurgerIngredient extends Component {
    render ()
    {
        let ingredient = null;

        switch (this.props.IngType) {
            case ('bread-bottom'):
                ingredient = <div className = {classingr.BreadBottom}></div>
                break;
            default:
                ingredient = null;
        }
        return ingredient;
    }
}

BurgerIngredient.PropTypes = {
    IngType: PropTypes.string.isRequired
}
export default BurgerIngredient;