import React from 'react';
import Aux from "../../../hoc/auxax";
import Button from "../../UI/Button/Button";

const OrderSummary =(props)=>{
    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {return <li key={igKey}> {igKey} : {props.ingredients[igKey]} </li>});
    return(
      <Aux>
          <p> Your Order :</p>
          <h3> Burger made only for you </h3>
          <ul>
              {ingredientSummary}
          </ul>
          <p> Proceed to Checkout ? </p>
          <p><strong> TOTAL PRICE: {props.price} </strong></p>
         <div style={{display:'block'}}>
             <Button btnType= "Danger" clicked={props.purchaseCancel} > CANCEL </Button>
             <Button btnType= 'Success' clicked={props.purchaseContinue}> CONTINUE </Button>
         </div>
      </Aux>
    );
};

export default OrderSummary;