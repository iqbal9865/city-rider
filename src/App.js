
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Destination from './components/Destination/Destination';

function App() {
  
  return (
    <div>
      <Router>
        <Header/>
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/destination/:name'>
            <Destination/>
          </Route>
          <Route exact path='/'>
            <Home/>
          </Route>
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
