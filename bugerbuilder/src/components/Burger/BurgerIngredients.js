import React,{Component} from 'react';
import styles from './BurgerIngredient.css'
import PropTypes from 'prop-types';

class BurgerIngredient extends Component{
    render() {
        let ingredients = null;
        switch (this.props.type) {
            case ('BreadBottom'): ingredients = <div className={styles.BreadBottom}> </div>;
                break;
            case ('BreadTop'): ingredients = (
                <div className={styles.BreadTop}>
                    <div className={styles.Seeds1}> </div>
                    <div className={styles.Seeds2}> </div>
                </div>
            );
                break;
            case('Meat'):
                ingredients =<div className={styles.Meat}> </div> ;
                break;
            case('Cheese'):
                ingredients = <div className={styles.Cheese}> </div>;
                break;
            case('Salad'):
                ingredients = <div className={styles.Salad}> </div>;
                break;
            case('Bacon'):
                ingredients = <div className={styles.Bacon}> </div>;
                break;
            default : ingredients = null;
        }
        return ingredients;
    }
}

BurgerIngredient.propType={
    type : PropTypes.string.isRequired,
};

export  default BurgerIngredient ;