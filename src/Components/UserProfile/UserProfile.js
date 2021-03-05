import React from 'react';
import Navbar from '../Navbar/Navbar.js'
import classes from './UserProfile.module.css'
import { useHistory } from "react-router-dom";

const UserProfile = (props) => {
    const users = props.store.getState().users.data
    const history = useHistory();
    const userId = history.location.pathname.match(/\d+/)
    const user = users.find(item => item.id === Number(userId[0]))
 
    return   (
        <div className={classes.main}>
            <Navbar store={props.store} userId={userId}/>
            <div className={classes.content}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h4>{user.name} Profile</h4>
                                        <hr/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <form>
                                        <div className="form-group row ">
                                            <label htmlFor="username" className="col-4 col-form-label">User Name</label> 
                                            <div className="col-8">
                                            <input id="username" name="username" value={`${user.name}`} className="form-control here" required="required" type="text"/>
                                            </div>
                                        </div>
                                        <div className="form-group row mt-2">
                                            <label htmlFor="name" className="col-4 col-form-label">Email</label> 
                                            <div className="col-8">
                                            <input id="name" name="name" value={`${user.email}`} className="form-control here" type="text"/>
                                            </div>
                                        </div>
                                        <div className="form-group row mt-2">
                                            <label htmlFor="lastname" className="col-4 col-form-label">Phone</label> 
                                            <div className="col-8">
                                            <input id="lastname" name="lastname" value={`${user.phone}`} className="form-control here" type="text"/>
                                            </div>
                                        </div>
                                        <div className="form-group row mt-2">
                                            <label htmlFor="text" className="col-4 col-form-label">Nick Name</label> 
                                            <div className="col-8">
                                            <input id="text" name="text" value={`${user.username}`} className="form-control here" required="required" type="text"/>
                                            </div>
                                        </div>
                                        <div className="form-group row mt-2">
                                            <label htmlFor="email" className="col-4 col-form-label">Address</label> 
                                            <div className="col-8">
                                            <input id="email" name="email" value={`${user.address.city},  ${user.address.street}`} className="form-control here" required="required" type="text"/>
                                            </div>
                                        </div>
                                        <div className="form-group row mt-2">
                                            <label htmlFor="website" className="col-4 col-form-label">Website</label> 
                                            <div className="col-8">
                                            <input id="website" name="website" value={`${user.website}`} className="form-control here" type="text"/>
                                            </div>
                                        </div>
                                        <div className="form-group row mt-2">
                                            <label htmlFor="publicinfo" className="col-4 col-form-label">Public Info</label> 
                                            <div className="col-8">
                                            <textarea id="publicinfo" name="publicinfo" cols="40" rows="4" className="form-control"></textarea>
                                            </div>
                                        </div>
                                        <div className="form-group row mt-2">
                                            <div className="offset-4 col-8">
                                            <button name="submit" type="submit" className="btn btn-primary">Update My Profile</button>
                                            </div>
                                        </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        )
}

export default UserProfile;