import React from 'react';
import './App.css';
import Venues from './components/Venues'
import { fetchVenues, updateLocation, updateType } from "./actions/venue";
import { BrowserRouter as Router} from "react-router-dom";
import {Route, Link} from 'react-router-dom'
import { connect } from "react-redux";
import Login from './components/Login'
import Nav from './components/Nav'
import PrivateRoute from './utils/ProtectedRoute'
import Register from './components/Register'


function App(props) {
  console.log(props)
  return (
    <Router>
    <div className="App">

      <Route exact path="/" render={props =><Nav {...props}/>}/>
      <Route exact path="/register" render={ props =><Register {...props}/>}/>
      <Route exact path="/login" render={ props =><Login {...props}/>}/>
      <PrivateRoute path="/venues" 
            fetchVenues={props.fetchVenues}
            venues={props.venues}
            updateLocation={props.updateLocation}
            updateType={updateType} 
            isDogLoading={props.isDogLoading}
            dogError={props.dogError}
            component={Venues}/>
    </div>
    </Router>
  );
}

function mapStateToProps(state) {
  console.log(state);
  return {
    isDogLoading: state.isLoading,
    venues: state.venues,
    dogError: state.error
  };
}

const mapDispatchToProps = {
  // send a version of our action creator that's attached to
  // the dispatcher to the component as a prop
  fetchVenues,
  updateLocation,
  updateType
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
