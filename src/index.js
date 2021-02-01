import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './Redux/Store';
import App from './App';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import User from './Components/User/User'; 
import Login from './Components/Login/Login';
import NewUser from './Components/NewUser/NewUser'
import ChangeUser from './Components/ChangeUser/ChangeUser'
import AllUsers from './Components/AllUsers/AllUsers'
import InputField from './Components/InputField/InputField'


ReactDOM.render(
  <BrowserRouter>
      <App>
        <Switch>
          <Route exact path='/' render={ () => <Login store={store}/> } />
          <Route path='/loginUser' render={ () => <User store={store}/> } />
          <Route path='/newUser' render={() => <NewUser store={store}/>} />
          <Route path='/changeUser' render={ () => <ChangeUser store={store}/> } />
          <Route path='/allUsers' render={ () => <AllUsers store={store}/> } />
          <Route path='/inputField' render={ () => <InputField /> } />
        </Switch>
      </App>
    </BrowserRouter>,
  document.getElementById('root')
);