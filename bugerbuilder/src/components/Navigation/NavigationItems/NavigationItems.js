import React from 'react';
import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems=()=>(
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" > BurgerBuilder </NavigationItem>
        <NavigationItem link="/orders"> My-Orders </NavigationItem>
    </ul>
);

export default navigationItems;
