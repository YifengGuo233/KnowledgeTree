import React from 'react';
import './Countdown.css';
import Navbar from './Navbar';
import Class from './Class';
import Card from './components/Card';
import SubmitTodo from './components/submitTodo';
import firebase from './config/fbconfig.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//https://www.npmjs.com/package/react-countdown-now
import Countdown from 'react-countdown-now';

class Countdowntimer extends React.Component {

  constructor() {
      super();
      this.state = {
        countdownlist:[]
      }
      this.delete = this.delete.bind(this);
      this.complete = this.complete.bind(this);
    }

  componentDidMount() {
    const itemsRef = firebase.database().ref('todo');
    itemsRef.on('value', (snapshot) => {
      let grabed_items = snapshot.val();
      let newcountdownlist = [];
      for (let item in grabed_items) {
        console.log(grabed_items[item])
        newcountdownlist.push({
          id: item, //item just the id
          name: grabed_items[item].name,
          time: grabed_items[item].time,
          complete: grabed_items[item].complete
        });
      }
      this.setState({
        countdownlist: newcountdownlist
      });
    });
    console.log(this.state.countdownlist);
  }

delete(e){
  console.log(e.target.parentNode.id);
  var itemId = e.target.parentNode.id;
  const itemRef = firebase.database().ref(`/todo/${itemId}`);
  itemRef.remove();
}

complete(e){
  var name = e.target.parentNode.children[1];
  var time = e.target.parentNode.children[2];
  var tof = e.target.className
  //console.log(e.target.parentNode.children[2]);
  var completeorNot = false;
  if(tof == "true"){
    console.log("change to false")
    completeorNot = false;
  }
  else{
    console.log("change to true")
    completeorNot = true;
  }
  const todo = {
    // name: name,
    // time: time,
    complete: completeorNot
  }
  var itemId = e.target.parentNode.id;
  console.log("id: " + itemId);
  const itemRef = firebase.database().ref(`/todo/${itemId}`);
  itemRef.update(todo);
}

render() {
  return (
    <div>
    <p>Clock Page</p>
<SubmitTodo />
{this.state.countdownlist.map((d) =>
  <div class='tododiv' id={d.id}>
  <Countdown date={new Date(d.time) + 5000}/>
  <p>{d.name}</p>
  <p>{d.time}</p>
  <button className={d.complete.toString()} onClick={this.complete} >O</button>
  <button onClick={this.delete}>X</button>
  </div>
)}
      </div>
  );
};

}

export default Countdowntimer;