import React from 'react';
import Logo from "../Logo/Logo";
import classes from "./Sidedrawer.css";
import NavigationItems from '../NavigationItems/NavigationItems';
import Aux from "../../../hoc/auxax";
import Backdrop from "../../UI/Backdrop/Backdrop";

const sideDrawer =(props)=>{
    let attachedClasses =[classes.SideDrawer ,classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer,classes.Open];
    }

    return(
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')}>
            <Logo height="11%"/>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
        </Aux>
    );
};

export default sideDrawer;

