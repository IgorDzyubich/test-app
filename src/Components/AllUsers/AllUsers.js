import React from 'react';
import mainClasses from '../../styles/main.module.css';
import Navbar from '../Navbar/Navbar.js'
import { useHistory } from "react-router-dom";

const AllUsers = (props) => {
    console.log('props USERS => ',props.store.getState().users.data)
    let users = props.store.getState().users.data

    const history = useHistory();

    const changeUser = (userId) => {
        history.push(`/userProfile/${userId}`);
    }
    
    return <div className={mainClasses.main}>
                <Navbar store={props.store}/>
                <div className={mainClasses.content}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                            <h2>AllUsers</h2>
                                {users.map(item => {
                                    return <div className={mainClasses.wrapper} key={item.id} onClick={changeUser.bind(null, item.id)}><strong >{item.id}</strong>  {item.name}</div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
}

export default AllUsers;