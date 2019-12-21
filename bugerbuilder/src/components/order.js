import React from 'react';
import classes from './order.css'

const order =(props)=> {
    const ingredients =[];
    for ( let ingredientName in props.ingredients){
        ingredients.push({name: ingredientName ,amount:props.ingredients[ingredientName]})
    }
    const ingredientOutput = ingredients.map( ig=> {return (
        <span
            key={ig.name}
            className={classes.Output}>{ig.name} ({ig.amount}) </span>)});
    return(
        <div className={classes.Order}>
            <h4> ingredients : {ingredientOutput} </h4>
            <h4> price : <strong> {props.price} </strong></h4>
        </div>     
    );
};

export default order ;
