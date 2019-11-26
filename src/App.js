import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom';

import Login from './pages/Login/index'
import UserProfile from './pages/UserProfile/index'
import Signup from './pages/Signup/index'
import Logout from "./pages/Logout/index";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={UserProfile} />
        <Route exact path='/login' component={Login} />
        <Route path='/sign-up' component={Signup} />
        <Route path='/log-out' component={Logout} />
      </Router>
    </div>
  );
}

export default App;
