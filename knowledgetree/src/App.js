import React from 'react';
import './App.css';
import Navbar from './Navbar';
import About from './About';
import User from './User';
import Home from './Home';
import Class from './Class';
import Countdown from './Countdown';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {

  return (
    <Router>
    <div>
      <Navbar />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/user" component={User} />
      <Route path="/Class" component={Class} />
      <Route path="/Countdown" component={Countdown} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
