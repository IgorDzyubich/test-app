import { combineReducers, createStore } from 'redux';
import usersReduser from './UsersReducer';

let reducers = combineReducers({
    users: usersReduser,
})

let store = createStore(reducers);

export default store;