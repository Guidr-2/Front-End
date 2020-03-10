import React from 'react';
import './App.css';
import Login from './component/Login';
import SignUp from './component/SignUp';
import { Route, Link } from 'react-router-dom';
import CreateProfile from './component/CreateProfile';
import Profile from './component/Profile';

function App() {
  return (
    <div className='App'>
      <div className='nav'>
        <div>
          <Link exact to='/'>
            Home
          </Link>
        </div>
        <div>
          <Link to='/Login'>Login</Link>
        </div>
        <div>
          <Link to='/SignUp'>Sign Up</Link>
        </div>
        <div>
          <Link to='/CreateProfile'>Create Profile</Link>
        </div>
        <div>
          <Link to='/Profile'>Profile</Link>
        </div>
      </div>

      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/SignUp'>
        <SignUp />
      </Route>
      <Route path='/CreateProfile'>
        <CreateProfile />
      </Route>
      <Route path='/Profile'>
        <Profile />
      </Route>
      {/* <Login /> */}
      {/* <SignUp /> */}
    </div>
  );
}

export default App;
