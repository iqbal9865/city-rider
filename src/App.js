
import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Destination from './components/Destination/Destination';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import StaticDestination from './components/StaticDestination/StaticDestination';

export const UserContext = createContext()

function App(props) {
  const [logInUser, setLogInUser] = useState({});
  return (
    <UserContext.Provider value={[logInUser, setLogInUser]}>
      <Router>
      <Header/>
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <PrivateRoute path='/destination/:name'>
            <Destination/>
          </PrivateRoute>
          <Route exact path='/destination'>
            <StaticDestination/>
          </Route>
          <Route exact path='/'>
            <Home/>
          </Route>
        </Switch>
      </Router> 
    </UserContext.Provider>
  );
}

export default App;
