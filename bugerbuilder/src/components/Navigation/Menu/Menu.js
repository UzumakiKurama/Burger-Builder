import React from 'react';
import classes from './Menu.css';
const Menu =(props)=>(
    <div className={classes.DrawerToggle} onClick= {props.openSideDrawer}>
        <div> </div>
        <div> </div>
        <div> </div>
    </div>
);

export default Menu;
