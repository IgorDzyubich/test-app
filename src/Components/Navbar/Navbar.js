import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = (props) => {
    return <nav className={classes.nav}>
                <div className={classes.item}>
                <NavLink to={'/changeUser'} activeClassName={classes.active}>Change user parameters</NavLink>
                </div>
                <div className={classes.item}>
                <NavLink to='/allUsers' activeClassName={classes.active}>Show all users</NavLink>
                </div>
                <div className={classes.item}>
                <NavLink to='/inputField' activeClassName={classes.active}>Text input/output fields</NavLink>
                </div>
            </nav>
}

export default Navbar;