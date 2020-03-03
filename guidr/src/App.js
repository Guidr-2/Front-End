import React from 'react';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Trips from './components/Trips';
import { Route, Link } from 'react-router-dom';

function App() {
  return (

    <div className='App'>
      <p>
        <Link exact to='/'>
          Home
        </Link>
      </p>

      <li>
        <Link 
          to='/Login'>
          Login
        </Link>
      </li>

      <li>
        <Link 
          to='/SignUp'>
            Sign Up
        </Link>
      </li>

      <Route 
        path='/login'
        component={Login}
      >
      </Route>
      
      <Route 
        path='/SignUp'
        component={SignUp}
      >
      </Route>
     
      <Trips />

    </div>
  );
}

export default App;
