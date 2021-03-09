import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from 'react-router-dom';
import NavbarMUI from './Components/Navbar/NavbarMUI'
import Login from './Components/Login/Login'
import './App.css';
import { fetchUserDetails } from './actions';


class App extends Component {
  state = {}
  
  componentDidMount() {
    this.props.fetchUserDetails();
  }

  render() {
    console.log('props => ',this.props)
  
    return (
        <div className='app-wrapper'> 
          <div className='app-wrapper-content'>
            <Switch>
                <Route exact path='/loginUser/:id' render={ () => <NavbarMUI store={this.props.store}/> } />
                <Route exact path='/userProfile/:id' render={ () => <NavbarMUI store={this.props.store}/> } />
                <Route path='/changeUserProfile' render={ () => <NavbarMUI store={this.props.store}/> } />
                <Route path='/newUser' render={() => <NavbarMUI store={this.props.store}/> } />
                <Route path='/item1' render={ () => <NavbarMUI store={this.props.store}/> } />
                <Route path='/item2' render={ () => <NavbarMUI store={this.props.store}/> } />
                <Route path='/item3' render={ () => <NavbarMUI store={this.props.store}/> } />
                <Route path='/allUsers' render={ () => <NavbarMUI store={this.props.store}/> } />
                <Route exact path='/login' render={ () => <Login store={this.props.store}/> } />
            </Switch>
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