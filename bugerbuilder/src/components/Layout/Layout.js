import React, {Component} from 'react';
import Aux from '../../hoc/auxax'
import SideDrawer from '../Navigation/SideDrawer/Sidedrawer'
import classes from './Layout.css'
import Toolbar from "../Navigation/Toolbar/Toolbar";

class Layout extends Component{
    state= {
        ShowSideDrawer : false,
    };
    SideDrawerOpenedHandler=()=>{
        this.setState((prevState)=> {return{ShowSideDrawer :!prevState.ShowSideDrawer}})
    };

    SideDrawerClosedHandler=()=>{
        this.setState({ShowSideDrawer: false})
    };
    render(){
        return(
            <Aux>
                <Toolbar opened={this.SideDrawerOpenedHandler}/>
                <SideDrawer open ={this.state.ShowSideDrawer} closed ={this.SideDrawerClosedHandler} />
                    <main className={classes.content}>
                        {this.props.children}
                    </main>
            </Aux>

        );
    }
}
export default Layout ;