import React from 'react';
import './App.css';
import Venues from './components/Venues'
import { BrowserRouter as Router} from "react-router-dom";
import {Route} from 'react-router-dom'

import Login from './components/Login'
import Nav from './components/Nav'
import PrivateRoute from './utils/ProtectedRoute'
import Register from './components/Register'
import Meals from './components/Meals'
import VenueDetails from './components/VenueDetails'


function App(props) {
  console.log(props)
  return (
    <Router>
      <div className="App">

        <Route exact path="/" render={props =><Nav {...props}/>}/>
        <Route path="/register" render={ props =><Register {...props}/>}/>
        <Route path="/login" render={ props =><Login {...props}/>}/>
        <Route path="/venue/:id" component={VenueDetails}/>
        <Route path="/venues" component={Venues}/>
        <PrivateRoute path="/meals" component={Meals}/>

      </div>
    </Router>
  );
}

export default App;
