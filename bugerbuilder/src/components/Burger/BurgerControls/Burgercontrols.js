import React from 'react';
import classes from './BurgerControls.css';
import BurgerControl from './BurgerControl/BurgerControl';

const controls = [
    {label: 'Salad' ,type:'Salad'},
    {label: 'Meat' ,type:'Meat'},
    {label: 'Bacon' ,type:'Bacon'},
    {label: 'Cheese' ,type:'Cheese'}
];
const burgerControls = (props) =>(
    <div className={classes.BuildControls}>
        <p><strong> Current Price :  {props.price} </strong> </p>
        {controls.map(ctrl =>(
            <BurgerControl
                key={ctrl.label}
                label={ctrl.label}
                add={() => props.ingredientAdd(ctrl.type)}
                removed={() => props.ingredientRemove(ctrl.type)}
                disabled ={props.disabled[ctrl.type]}/>
        ))}
        <button onClick = {props.ordered}  className={classes.OrderButton} disabled={ !props.purchasable} > ORDER NOW </button>
    </div>
);

export default burgerControls ;