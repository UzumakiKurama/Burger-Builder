import React , {Component} from 'react';
import CheckoutSummary from "../../components/CheckoutSummary/CheckoutSummary";
import ContactData from '../ContactData/ContactData';
import {Route} from 'react-router-dom';

class  Checkout extends Component{
    state ={
        ingredients : null,
        price: 0,
    };

UNSAFE_componentWillMount() {
    const queryString = new URLSearchParams(this.props.location.search);
    const ingredients ={};
    let price =0;
    for (let params of queryString.entries()){
        if (params[0]=== 'price')
        {
            price = params[1];
        }else {
            ingredients[params[0]] = +params[1];
        }
    }
    this.setState({ingredients: ingredients , totalPrice: price});
}

    checkoutCancelledHandler = () => {
     this.props.history.goBack();
};

checkoutContinuedHandler = () => {
  this.props.history.replace('/checkout/contact-form');
};
    render() {
        return(
            <div>
                <CheckoutSummary
                    ingredients = {this.state.ingredients}
                    cancelled={this.checkoutCancelledHandler}
                    continued={this.checkoutContinuedHandler}/>
                    <Route
                        path={this.props.match.path + '/contact-form' }
                        render={(props)=> (<ContactData
                                    ingredients={this.state.ingredients}
                                    price={this.state.totalPrice}{...props} />)}  />
            </div>
        );
    };
}

export default Checkout;