import React from 'react';
import './App.css';

import { getToken } from './utils/axiosWithAuth';
import Login from './components/Login';
import SignUp from './components/SignUp';

import Trips from './components/Trips';
import { Route, Link, withRouter } from 'react-router-dom';
import ProtectedRoute from './utils/ProtectedRoute';
import CreateTrip from './components/CreateTrip';
import CreateProfile from './components/CreateProfile';

function App() {

  const signedIn = getToken();

  return (
    <div className='App'>
      <nav>
        {!signedIn && 
          <Link 
            to='/SignUp'>
              Sign Up
          </Link>}

        {!signedIn &&
          <Link 
            to='/Login'>
              Login
          </Link>}

        {signedIn && 
          <Link 
            to='/CreateTrip'>
              Create A Trips
          </Link>}

        {signedIn && 
          <Link
            to='/Profile'>
              Guide Profile
          </Link>}
      </nav>

        <Link 
          to='/CreateProfile'>
            Create Profile
        </Link>
           
      <ProtectedRoute
        exact path='/Trips'
        component={Trips}
      />

      <ProtectedRoute
        exact path='/CreateTrip'
        component={CreateTrip}
      />

      <Route path='/CreateProfile'>
        <CreateProfile />
      </Route>
      <Route path='/CreateTrip'>
        <CreateTrip />
      </Route>
    </div>
  );
}

export default withRouter(App);
