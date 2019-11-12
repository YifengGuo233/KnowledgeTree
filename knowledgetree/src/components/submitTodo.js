import React from 'react';
import './submitTodo.css';
import firebase from '../config/fbconfig.js'

class submitTodo extends React.Component {

  constructor() {
      super();
      this.state = {
        todoname: '',
        todotime: '',
      }
  //Since we're using ES6 classes and need access to this
  //in our handleChange method, we'll also need to bind it
  //back in our constructor() component like this:
  this.handleChangeTodoName = this.handleChangeTodoName.bind(this);
  this.handleChangeTodoTime = this.handleChangeTodoTime.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeTodoName(e) {
      this.setState({
        todoname: e.target.value
      });
    }
    handleChangeTodoTime(e) {
      this.setState({
        todotime: e.target.value
      });
    }

    handleSubmit(e) {
      e.preventDefault();
      if(this.state.todoname){
      const courseRef = firebase.database().ref('todo');
      const todo = {
        name: this.state.todoname,
        time: this.state.todotime,
        complete: false
      }
      courseRef.push(todo);
      this.setState({
        todoname: '',
      });
      document.getElementById("input_todo_name").value = "";
      document.getElementById("input_todo_time").value = "";
    }
    else{
      alert("Todo need a name");
    }
    }


render() {
  return(
    <div id="input_div">
    <form onSubmit={this.handleSubmit}>
       <input id="input_todo_name"type="text" name="addTodo" placeholder="add a Todo?" onChange={this.handleChangeTodoName} />
       <input id="input_todo_time"type="date" name="addTime" placeholder="When is the due?" onChange={this.handleChangeTodoTime} />
       <button class="yg_bt_hover_shadow yg_bt_blue">Add Todo</button>
     </form>
     </div>
  );
}



};

export default submitTodo;
