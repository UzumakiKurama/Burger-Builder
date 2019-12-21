import React from 'react';
import Burger from '../Burger/Burger';
import Button from '../UI/Button/Button';
import classes from './CheckoutSummary.css'
import {withRouter} from 'react-router-dom';
const CheckoutSummary=(props)=>{
  return (
      <div className={classes.CheckoutSummary}>
          <h1> Your final Burger looks like this</h1>
          <div style={{width: '100%', height: '500px', margin: 'auto'}}>
              <Burger ingredients ={props.ingredients} />
              <Button btnType='Danger' clicked={props.cancelled} > CANCEL </Button>
              <Button btnType='Success' clicked={props.continued}> CONTINUE </Button>
          </div>
      </div>
  );
};

export default withRouter(CheckoutSummary);