import React from 'react';
import mainClasses from '../../styles/main.module.css';
// import ChangeUser from '../ChangeUser/ChangeUser'
// import { useHistory } from "react-router-dom";

const Item1 = (props) => {
    // const users = props.store.getState().users
    // const history = useHistory();
    // const userId = history.location.pathname.match(/\d+/)
    // const user = users.find(item => item.id === Number(userId[0]))

    // return <ChangeUser store={props.store} userId={user.id}/>  
    return   (
        <div className={mainClasses.main}>
            <div className={mainClasses.content}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <h1>Item1</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

    )
}

export default Item1;