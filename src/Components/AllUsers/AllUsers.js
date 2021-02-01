import React from 'react';
import classes from './AllUsers.module.css';
import Navbar from '../Navbar/Navbar.js'
import { useHistory } from "react-router-dom";

const AllUsers = (props) => {
    let users = props.store.getState().users
    const history = useHistory();

    const changeUser = (userId) => {
        history.push(`/loginUser/${userId}`);
    }
    
    return <div className={classes.main}>
                <Navbar />
                <div className={classes.content}>
                <h2>AllUsers</h2>
                    {users.map(item => {
                        return <div className={classes.wrapper} key={item.id} onClick={changeUser.bind(null, item.id)}><strong >{item.id}</strong>  {item.name}</div>
                    })}
                </div>
                </div>
}

export default AllUsers;