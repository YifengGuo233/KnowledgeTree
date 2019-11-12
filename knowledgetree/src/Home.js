import React from 'react';
import './Home.css';
import Navbar from './Navbar';
import Class from './Class';
import Card from './components/Card';
import SubmitClass from './components/submitClass';
import firebase from './config/fbconfig.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class Home extends React.Component {

  constructor() {
      super();
      this.state = {
        classlist:[]
      }
    }

  componentDidMount() {
    const itemsRef = firebase.database().ref('course');
    itemsRef.on('value', (snapshot) => {
      let grabed_items = snapshot.val();
      //console.log(grabed_items);
      let newclasslist = [];
      for (let item in grabed_items) {
        //console.log(grabed_items[item].name);
        newclasslist.push(grabed_items[item].name);
      }
      this.setState({
        classlist: newclasslist
      });
    });
    console.log(this.state.classlist);
  }


render() {
  return (
    <div>
    <p>Home Page</p>

    <SubmitClass />
    <div className="grid-container">
      {this.state.classlist.map((d) =>
        <Card key={d} nametext ={d}/>
      )}
    </div>
      </div>
  );

};

}

export default Home;
