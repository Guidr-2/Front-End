import React from 'react';
import './App.css';

import { getToken } from './utils/axiosWithAuth';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Trips from './components/Trips';
import { Route, Link } from 'react-router-dom';
import ProtectedRoute from './utils/ProtectedRoute';

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
     
      <ProtectedRoute
        exact path='/Trips'
        component={Trips}
      />

    </div>
  );
}

export default App;
