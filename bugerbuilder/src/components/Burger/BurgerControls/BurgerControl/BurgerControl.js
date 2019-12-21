import React from 'react';
import classes from './BuildControl.css'

const burgerControl =(props)=> (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less} onClick={props.removed} disabled={props.disabled}> Less </button>
        <button className={classes.More} onClick={props.add}> Add </button>
    </div>
);

export default burgerControl;