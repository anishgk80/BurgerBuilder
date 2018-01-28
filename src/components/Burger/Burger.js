import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
    return (
        <div>
            <BurgerIngredient IngType="bread-bottom" />
        </div>
    );
}

export default burger;