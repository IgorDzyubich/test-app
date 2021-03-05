import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './Redux/Store';
import App from './App';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import User from './Components/User/User'; 
import UserProfile from './Components/UserProfile/UserProfile'; 
import Item1 from './Components/Item1/Item1'; 
import Item2 from './Components/Item2/Item2'; 
import Item3 from './Components/Item3/Item3'; 
import Login from './Components/Login/Login';
import NewUser from './Components/NewUser/NewUser';
import ChangeUser from './Components/ChangeUser/ChangeUser';
import AllUsers from './Components/AllUsers/AllUsers';
import InputField from './Components/InputField/InputField';

// let users = store.getState().users

ReactDOM.render(
    <BrowserRouter>
      <App store={store}>
        <Switch>
          <Route exact path='/' render={ () => <Login store={store}/> } />
          <Route path='/userProfile/:id' render={ () => <UserProfile store={store}/> } />
          <Route path='/changeUserProfile' render={ () => <ChangeUser store={store}/> } />
          <Route path='/newUser' render={() => <NewUser store={store}/>} />
          <Route path='/item1' render={ () => <Item1 store={store}/> } />
          <Route path='/item2' render={ () => <Item2 store={store}/> } />
          <Route path='/item3' render={ () => <Item3 store={store}/> } />
          <Route path='/allUsers' render={ () => <AllUsers store={store}/> } />
          <Route path='/inputField' render={ () => <InputField store={store}/> } />
          <Route path='/loginUser/:id' render={ () => <User store={store} /> } />
        </Switch>
      </App>
    </BrowserRouter>,
  document.getElementById('root')
);