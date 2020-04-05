import React, { useState, useEffect } from 'react';
import './App.css';

import { getToken } from './utils/axiosWithAuth';
import axiosWithAuth from './utils/axiosWithAuth';
import { TripsContext } from './contexts/TripsContext';

import Login from './components/Login';
import SignUp from './components/SignUp';

import Trips from './components/Trips';
import Trip from './components/Trip';
import { Route, Link, withRouter } from 'react-router-dom';
import ProtectedRoute from './utils/ProtectedRoute';
import CreateTrip from './components/CreateTrip';
import Logout from './utils/Logout';
import UpdateTrip from './components/UpdateTrip';
import SingleTrip from './components/SingleTrip';
// import CreateProfile from './components/CreateProfile';

const jwtDecode = require('jwt-decode');

function App() {
  const [trips, setTrips] = useState([]);
  // console.log(trips);
  const signedIn = getToken();

  function isSignedIn() {
     const decoded = jwtDecode(localStorage.getItem('token'));
      // console.log(decoded);
      trips.user_id = decoded.userid;
  }

  useEffect(() => {
      // const decoded = jwtDecode(localStorage.getItem('token'));
      // // // console.log(decoded);
      // trips.user_id = decoded.userid;
      !signedIn ? console.log('Signed In') : isSignedIn()

      axiosWithAuth()
      .get('trips')
      .then(response => {
        setTrips(response.data)
        console.log(response);
      })
      .catch(error => {
        localStorage.removeItem('token');
        console.log(error.name)
      })
    }, [trips.user_id, !signedIn]); 

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
              Create A Trip
          </Link>}

        {/*signedIn && 
          <Link
            to='/Profile'>
              Guide Profile
          </Link>*/}
        {signedIn && 
          <Link
            to='/Trips'>
              Trip List
          </Link>
        }

        {signedIn && 
          <Link
            to='/Logout'>
              Logout
          </Link>
        }
        {/*signedIn && 
          <Link 
            to='/CreateProfile'>
              Create Profile
          </Link>
        */}
      </nav>

      <Route 
        exact path='/login'
        component={Login}
      >
      </Route>
      
      <Route 
        exact path='/SignUp'
        component={SignUp}
      >
      </Route>
      
      <TripsContext.Provider value={{ trips }}>
        <ProtectedRoute
          exact path='/Trips'
          component={Trips}
        />

        <ProtectedRoute
          exact path='/Trip/:id'
          component={Trip}
        />

        <ProtectedRoute
          exact path='/SingleTrip/:id'
          component={SingleTrip}
        />
      </TripsContext.Provider>

      <ProtectedRoute
        exact path='/CreateTrip'
        component={CreateTrip}
      />

      <ProtectedRoute
        exact path='/Logout'
        component={Logout}
      />

      <ProtectedRoute
        exact path='/UpdateTrip/:id'
        component={UpdateTrip}
      />

      {/*
      <ProtectedRoute 
              exact path='/CreateProfile'
              component={CreateProfile}
            />*/}

    </div>
  );
}

export default withRouter(App);
