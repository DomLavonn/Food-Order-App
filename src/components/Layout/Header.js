import React from "react";
import mealsImage from '../../assets/mealimg.jpg'
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";

// Passing click method to onClick
const Header = (props) => {
    return <>
        <header className={classes.header}>
            <h1> React Meals</h1>
            <HeaderCartButton  onClick={props.onShowCart}/>
            <button></button>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="Table full of delicious food"/>
        </div>
    </>
}

export default Header