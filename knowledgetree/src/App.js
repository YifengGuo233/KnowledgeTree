import React from 'react';
import './App.css';
import Checker from './Checker';
import Navbar from './Navbar';
import About from './About';
import User from './User';
import Home from './Home';
import Class from './Class';
import Section from './Section';
import Countdown from './Countdown';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { AuthProvider } from "./config/Auth";
import PrivateRoute from "./PrivateRoute";

function App() {

  return (
     <AuthProvider>
    <Router>
    <div>
      <Navbar />
      <Switch>
      <Route path="/" exact component={Checker} />
      <PrivateRoute path="/home" component={Home} />
      <PrivateRoute path="/about" component={About} />
      <PrivateRoute path="/user" component={User} />
      <PrivateRoute path="/Class" component={Class} />
      <PrivateRoute path="/Section" component={Section} />
      <PrivateRoute path="/Countdown" component={Countdown} />
      </Switch>
      </div>
    </Router>
     </AuthProvider>
  );
}

export default App;
