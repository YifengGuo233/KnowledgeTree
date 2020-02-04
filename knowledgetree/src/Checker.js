import React from 'react';
import './Checker.css';
import firebase from './config/fbconfig.js'
import Signup from './config/Signup.js'
import Login from './config/Login.js'
class Checker extends React.Component {
  constructor() {
      super();
      this.state = {

      }
    }

  componentDidMount() {

  }


render() {
  return (
    <div>
    <Login />
    <Signup />
    </div>
  );

};

}

export default Checker;
