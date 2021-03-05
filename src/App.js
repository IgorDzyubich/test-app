import React, { Component } from "react";
import { connect } from "react-redux";
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar.js'
import './App.css';
import { fetchUserDetails } from './actions';

class App extends Component {
  state = {}
  componentDidMount() {
    this.props.fetchUserDetails();
  }

  render() {
    console.log('props => ',this.props)
    const { children } = this.props

    return (
        <div className='app-wrapper'> 
          <Header /> 
          <div className='app-wrapper-content'>
          <Navbar store={this.props.store}/>
          { children }
          </div> 
        </div> 
    );
  }
}

const mapStateToProps = ({ data = {}, isLoadingData = false }) => ({
  data,
  isLoadingData
});
export default connect(
  mapStateToProps,
  {
    fetchUserDetails
  }
)(App);