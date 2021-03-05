import { combineReducers, createStore, applyMiddleware } from 'redux';
import apiMiddleware from "../middleware/api";
import usersReduser from './UsersReducer';

let reducers = combineReducers({
    users: usersReduser,
})

let store = createStore(reducers, applyMiddleware(apiMiddleware));

export default store;