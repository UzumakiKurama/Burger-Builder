import React,{Component} from 'react';
import Order from '../../components/order';
import axios from '../../Axios-orders';

class Orders extends Component {
    state ={
        orders: [],
        loading: true,
    };
    componentDidMount() {
        axios.get('/orders.json')
            .then(res=> { const fetchedOrders =[];
                    for(let key in res.data){
                        fetchedOrders.push({...res.data[key], id: key})
                    }
                    this.setState({loading:false, orders:fetchedOrders})})
            .catch(err=> {this.setState({loading: false})})
    }
    render(){
        return(
            <div>
                {this.state.orders.map( order => (<Order key={order.id} price={order.price} ingredients={order.ingredients}/>))}
            </div>
        );
    }
}

export default Orders;