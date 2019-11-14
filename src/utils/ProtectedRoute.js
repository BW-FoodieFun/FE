import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function getToken(){
    return localStorage.getItem("token")
}

const PrivateRoute = ({ component: Component, venues, fetchVenues, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      getToken() ? <Component venues={venues} fetchVenues={fetchVenues} {...props} /> : <Redirect to='/' />
    }
  />
);

export default PrivateRoute;
