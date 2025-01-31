import React , {Component} from  'react';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from "./containers/Checkout/Checkout";
import {Route,Switch} from 'react-router-dom';
import Orders from "./containers/orders/orders";

class App extends Component{
  render(){
    return(
      <div>
          <Layout>
                  <Switch>
                    <Route path="/checkout" component={Checkout}/>
                    <Route path="/" exact component={BurgerBuilder} />
                    <Route path='/orders' component={Orders}/>
                  </Switch>
                </Layout>
      </div>
    );
  }
}

export default App;
