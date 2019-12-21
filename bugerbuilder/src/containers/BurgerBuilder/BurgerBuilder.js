import React ,{Component} from 'react';
import Aux from '../../hoc/auxax';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BurgerControls/Burgercontrols';
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from '../../Axios-orders';
import Spinner from "../../components/UI/Spinner/Spinner";

const INGREDIENT_PRICE ={
    Salad : 4,
    Meat : 15,
    Cheese: 10,
    Bacon: 15,
};
class BurgerBuilder extends Component{
    state = {
        ingredients :null,
        totalPrice : 10,
        purchasable : false,
        purchasing : false,
        loading : false ,
    };

    componentDidMount() {
        console.log(this.props);
        axios.get('https://my-burger-builder-981a6.firebaseio.com/ingredients.json')
             .then(response => { this.setState({ingredients : response.data})})
    }

    updatePurchasableState (ingredient){
        const sum = Object.keys(ingredient).map((igKey)=> {return ingredient[igKey]}).reduce((sum,el)=>{ return sum + el ;},0);
        this.setState({purchasable :sum>0});
    }

    addIngredientHandler = (type)=>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount +1 ;
        const updatedIngredient = {
            ...this.state.ingredients
        };
        updatedIngredient[type]= updatedCount;
        const priceAddition = INGREDIENT_PRICE[type];
        const newPrice = this.state.totalPrice + priceAddition;
        this.setState({ingredients : updatedIngredient , totalPrice: newPrice});
        this.updatePurchasableState(updatedIngredient);
    };

    removeIngredientHandler =(type)=>{
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0){
            return;
        }
        const updatedCount = oldCount - 1 ;
        const updatedIngredient = {
            ...this.state.ingredients
        };
        updatedIngredient[type]= updatedCount;
        const priceDeduction = INGREDIENT_PRICE[type];
        const newPrice = this.state.totalPrice - priceDeduction;
        this.setState({ingredients : updatedIngredient , totalPrice: newPrice});
        this.updatePurchasableState(updatedIngredient);
    };

    purchasingHandler =()=>{
        this.setState({purchasing : true})
    };

    purchasingCancelHandler =()=>{
        this.setState({purchasing: false});
    };

    purchaseContinueHandler =()=>{
            const queryParams=[];
            for (let i in this.state.ingredients){
                queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
            }
            queryParams.push('price=' + this.state.totalPrice);
            const queryString= queryParams.join('&');
            this.props.history.push({
                pathname: '/checkout',
                search : '?' + queryString
            });
    };

    render(){
        const disabledInfo = {...this.state.ingredients};
        for (let key in disabledInfo){
            disabledInfo[key ]= disabledInfo[key] <= 0;
        }
            let orderSummary = null;
         let burger = <Spinner/>;
         if(this.state.ingredients){
             burger = (
                 <Aux>
                 <Burger ingredients ={this.state.ingredients} />
                 <BurgerControls ingredientAdd = {this.addIngredientHandler}
             ingredientRemove ={this.removeIngredientHandler}
             disabled ={disabledInfo}
             purchasable ={this.state.purchasable}
             price = {this.state.totalPrice}
             ordered={this.purchasingHandler}/>
                 </Aux>
             );
            orderSummary =  <OrderSummary ingredients={this.state.ingredients}
                                          purchaseCancel={this.purchasingCancelHandler}
                                          purchaseContinue={this.purchaseContinueHandler}
                                          price={this.state.totalPrice}
            />;
         }
        if (this.state.loading){
            orderSummary = <Spinner/>;
        }
        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClicked={this.purchasingCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}
export default BurgerBuilder;
