import React,{Component} from 'react';
import Button from '../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../Axios-orders';
import Spinner from "../../components/UI/Spinner/Spinner";
import InputField from "../../components/UI/InputField/InputField";

class ContactData extends Component{
    state = {
        Name: '',
        Email:'',
        PhoneNumber:'',
        Address : {
            Street:'',
            City: '',
            PinCode :''

        },
        loading: false,
    };
    orderHandler=(event)=>{
      event.preventDefault();
      this.setState({loading :true ,});
      const orders = {
            ingredients : this.props.ingredients,
            price :this.props.price ,
          Customer : {
              Name : 'Abhijeet' ,
              Address :'Delhi' ,
              PinCode : '110010' ,
          },
            DeliveryMethod : 'Fastest',

        };
        axios.post('/orders.json', orders)
             .then( response => {this.setState({loading: false})})
             .catch( error => {this.setState({loading:false})});
        this.props.history.replace('/');
    };
    render() {
         let form =(<form>
             <InputField  inputtype='input'  type='text'     name='Name'    placeholder='Your Name'/>
             <InputField  inputtype='input'  type='email'    name='Email'   placeholder='Your Email'/>
             <InputField  inputtype='input'  type='number'   name='Number'  placeholder='Your Number'/>
             <InputField  inputtype='input'  type='text'     name='Street'  placeholder='Your Street'/>
             <InputField  inputtype='input'  type='text'     name='City'    placeholder='City'/>
             <InputField  inputtype='input'  type='number'   name='PinCode' placeholder='PinCode'/>
             <Button btnType='Success' clicked={this.orderHandler}>ORDER</Button>
         </form>);
         if (this.state.loading){
             form = <Spinner/>
         }
        return(
            <div className={classes.ContactData}>
                <h4> Enter Your Details</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;