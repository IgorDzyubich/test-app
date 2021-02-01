import React from 'react';
import ChangeUser from '../ChangeUser/ChangeUser'
import { useHistory } from "react-router-dom";

const User = (props) => {
    const users = props.store.getState().users
    const history = useHistory();
    const userId = history.location.pathname.match(/\d+/)
    const user = users.find(item => item.id === Number(userId[0]))

    return <ChangeUser store={props.store} userId={user.id}/>    
}

export default User;