import React from 'react';
import classes from './Login.module.css';
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const users = props.store.getState().users

  const history = useHistory();

  const AuthRoute = (e) => {
    e.preventDefault()
    const formData = document.querySelectorAll(`.${classes.inputField}`)
    const loginUser = users.find(item => item.login === formData[0].value)

    if (loginUser === undefined) {
      history.push('/newUser');
    } else {
      if (loginUser.login === formData[0].value && loginUser.password === formData[1].value) {
        history.push(`/loginUser/${loginUser.id}`);
      } else if (loginUser && loginUser.password !== formData[1].value) {
        alert('Please enter a correct password!')
      }
    }
  };

    return <div className={classes.hero}>
              <div className={classes.formBox}>
                <form className={classes.inputGroup}>
                  <label htmlFor="user-select">Enter Login:</label>
                  <input type="text" list="users" className={classes.inputField}/>
                  <datalist id="users">
                    {users.map((option) => (
                        <option value={option.login} key={option.id}>{option.name}</option>
                      ))} 
                  </datalist>
                  <label htmlFor="password">Enter Password:</label>
                  <input type="text" className={classes.inputField} name="password" required/>
                  <button type="submit" className={classes.submitBtn} onClick={AuthRoute}>Log in</button>
                </form>
              </div>
            </div>
}

export default Login;