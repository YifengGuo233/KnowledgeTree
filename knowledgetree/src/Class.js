import React from 'react';
import './Home.css';
import Card from './components/Card';
import firebase from './config/fbconfig.js'

class Class extends React.Component {

  constructor(props) {
    console.log(props);
      super(props);
      this.state = {
        currentClass:props.location.state.currentClass
      }
    }

  componentDidMount() {
    console.log("componentDidMount()");
  }

render() {
  return (
    <div>
    <p>Class Page</p>
    <p>{this.state.currentClass}</p>
      </div>
  );

};

}

export default Class;
