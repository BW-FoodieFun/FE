import React from 'react';
import './App.css';
import Venues from './components/Venues'
import { fetchVenues, updateLocation, updateType } from "./actions/venue";
import { BrowserRouter as Router} from "react-router-dom";
import {Route} from 'react-router-dom'
import { connect } from "react-redux";
import Login from './components/Login'
import ProtectedRoute from './utils/ProtectedRoute'


function App(props) {
  console.log(props)
  return (
    <Router>
    <div className="App">
      <Route exact path="/" render={ props =><Login {...props}/>}/>
      <ProtectedRoute path="/venues" 
            venues={props.venues} 
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
