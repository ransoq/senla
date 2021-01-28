import React from "react";
import { Link } from "react-router-dom";
import ThemeTogglerButton from '../theme-toggler-button/theme-toggler-button';

import "./header.css";

const Header = ({ numItems, total, toggleTheme } : {numItems: number, total: number, toggleTheme: Function}) => {

    return (
        <header className="header row">
            <Link to="/">
                <div className="logo">BookStore</div>
            </Link>
            <ThemeTogglerButton toggleTheme={toggleTheme}/>
            <Link to="/cart">
                <div className="shopping-cart">
                    <i className="cart-icon fa fa-shopping-cart"/>
                    {numItems} items (${total})
                </div>
            </Link>
        </header>
    )
};

export default Header;