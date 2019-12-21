import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredients';

const burger =(props)=>{
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {return [...Array(props.ingredients[igKey])]
            .map(( _ , i)=> {return <BurgerIngredient key ={igKey +i} type={igKey}/>})})
        .reduce((arr ,el)=>{ return arr.concat(el)}, []);
    if (transformedIngredients.length === 0)
    { transformedIngredients = <p> Please add some ingredients</p> }
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="BreadTop" />
            {transformedIngredients}
            <BurgerIngredient type="BreadBottom" />
        </div>
    );
};

export default burger;