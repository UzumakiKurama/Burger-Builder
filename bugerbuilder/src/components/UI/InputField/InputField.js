import React from 'react'
import classes from './InputField.css'
const InputField =(props)=>{
    let inputElement = null;
    switch(props.inputtype) {
        case ('input'):
            inputElement = <input className={classes.InputElement} {...props}/>;
            break;
        case ('textarea') :
            inputElement =<textarea className={classes.InputElement} {...props} />;
            break;
        default :
            inputElement =<input className={classes.InputElement} {...props} />;
    }

    return(
        <div className={classes.Input}>
            <label className={classes.Label}>{props.children} </label>
            {inputElement}
        </div>
    );

};

export default InputField;