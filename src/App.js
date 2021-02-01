import React from 'react';
import Header from './Components/Header/Header';
import './App.css';


function App({ children }) {
  return (
      <div className='app-wrapper'> 
        <Header /> 
        <div className='app-wrapper-content'>
        { children }
        </div> 
       </div> 
  );
}

export default App;