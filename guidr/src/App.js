import React from 'react';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { Route, Link } from 'react-router-dom';
import CreateProfile from './component/CreateProfile';
import CreateTrip from './component/CreateTrip';

function App() {
  return (

    <div className='App'>
      <p>
        <Link exact to='/'>
          Home
        </Link>
      </p>

      <li>
        <Link to='/Login'>Login</Link>
      </li>
      <li>
        <Link to='/SignUp'>Sign Up</Link>
      </li>
      <li>
        <Link to='/CreateProfile'>Create Profile</Link>
      </li>
      <li>
        <Link to='/CreateTrip'>Create Trip</Link>
      </li>

      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/SignUp'>
        <SignUp />
      </Route>
      <Route path='/CreateProfile'>
        <CreateProfile />
      </Route>
      <Route path='/CreateTrip'>
        <CreateTrip />
      </Route>
      {/* <Login /> */}
      {/* <SignUp /> */}
    </div>
  );
}

export default App;
