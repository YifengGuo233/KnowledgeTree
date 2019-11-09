import React from 'react';
import './App.css';
import Card from './components/Card';
import Navbar from './Navbar';
import About from './About';
import User from './User';
import Home from './Home';
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
      </Switch>
      </div>
    </Router>
  );
}

export default App;
