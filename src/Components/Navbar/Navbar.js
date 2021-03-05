import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = (props) => {

    return  <nav className={classes.nav}>
                    <div className={classes.item}>
                    <NavLink to={`/userProfile`} activeClassName={classes.active}>User Profile</NavLink>
                    </div>
                    <div className={classes.item}>
                    <NavLink to={'/changeUserProfile'} activeClassName={classes.active}>Change user profile</NavLink>
                    </div>
                    <div className={classes.item}>
                    <NavLink to={'/item1'} activeClassName={classes.active}>item1</NavLink>
                    </div>
                    <div className={classes.item}>
                    <NavLink to={'/item2'} activeClassName={classes.active}>item2</NavLink>
                    </div>
                    <div className={classes.item}>
                    <NavLink to={'/item3'} activeClassName={classes.active}>item3</NavLink>
                    </div>
                    <div className={classes.item}>
                    <NavLink to='/allUsers' activeClassName={classes.active}>Show all users</NavLink>
                    </div>
                    <div className={classes.item}>
                    <NavLink to='/inputField' activeClassName={classes.active}>Text input</NavLink>
                    </div>
                </nav>
    
}

export default Navbar;