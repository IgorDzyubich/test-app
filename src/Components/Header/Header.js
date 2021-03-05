import React from 'react';
import classes from './Header.module.css';
// import logo from './../../../src/img/logo_cyfral_ukr.jpg';
import { useHistory } from "react-router-dom";

const Header = () => {
    const history = useHistory();
    const logOut = () => history.push(`/`)

    return <header className={classes.header}>
              {/* <img src={logo} alt="cyfral-logo"></img> */}
              <div className={classes.login}>Cyfral-logo</div>
              <h1>CYFRAL APPLICATION</h1>
              <div className={classes.login} onClick={logOut}>Log-out</div>
           </header>
}

export default Header;