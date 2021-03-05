import React from 'react';
import mainClasses from '../../styles/main.module.css';
import { useHistory } from "react-router-dom";

const User = (props) => {
    const users = props.store.getState().users.data
    const history = useHistory();
    const userId = history.location.pathname.match(/\d+/)
    const user = users.find(item => item.id === Number(userId[0]))

    return   (
        <div className={mainClasses.main}>
            <div className={mainClasses.content}>
            <h1>User-{user.id}</h1>
            </div>
        </div>
        

    )
}

export default User;