import React from 'react';
import './submitTodo.css';
import firebase from '../config/fbconfig.js'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
class submitTodo extends React.Component {

  constructor() {
      super();
      this.state = {
        startDate: new Date(),
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
    };
    handleChangeTodoTime= date => {

      var realDate = date.toISOString().split('T')[0];
      console.log(realDate)
    this.setState({
      startDate: date,
      todotime: realDate
    });
    };

    handleSubmit(e) {
      console.log("gg");
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
      //document.getElementById("input_todo_time").value = "";
    }
    else{
      alert("Todo need a name");
    }
    }



render() {
  return(
    <div id ="main">
    <form onSubmit={this.handleSubmit}>
    <div className="wrapper">
       <input id="input_todo_name"type="text" name="addTodo" onChange={this.handleChangeTodoName} required/>
       <label htmlFor="addTodo">
           <span>
               Todo Name
           </span>
       </label>
        </div>
        </form>
        <DatePicker
                id ="datepicker"
                selected={this.state.startDate}
                onChange={this.handleChangeTodoTime}
              />
     </div>

  );
}



};

export default submitTodo;
