import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './Redux/Store';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// let users = store.getState().users

ReactDOM.render(
    <BrowserRouter>
      <App store={store} />
    </BrowserRouter>,
  document.getElementById('root')
);