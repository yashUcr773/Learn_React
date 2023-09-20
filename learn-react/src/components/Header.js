// modules
import React from "react";

// assets
import logo from "../assets/investment-calculator-logo.png";

// styles
import styles from "./Header.module.scss";

// components

const Header = () => {
    return (
        <header className={styles.header}>
            <img src={logo} alt="logo" />
            <h1>Investment Calculator</h1>
        </header>
    );
};

export default Header;
