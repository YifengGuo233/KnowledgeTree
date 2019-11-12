import React from 'react';
import './submitClass.css';
import firebase from '../config/fbconfig.js'

class submitClass extends React.Component {

  constructor() {
      super();
      this.state = {
        classname: '',
      }
  //Since we're using ES6 classes and need access to this
  //in our handleChange method, we'll also need to bind it
  //back in our constructor() component like this:
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
      this.setState({
        classname: e.target.value
      });
    }

    handleSubmit(e) {
      e.preventDefault();
      if(this.state.classname){
      const courseRef = firebase.database().ref('course');
      const course = {
        name: this.state.classname
      }
      courseRef.push(course);
      this.setState({
        classname: '',
        username: ''
      });
      document.getElementById("input_course_name").value = "";
    }
    else{
      alert("Class need a name");
    }
    }


render() {
  return(
    <form onSubmit={this.handleSubmit}>
       <input id="input_course_name"type="text" name="addClass" placeholder="add a class?" onChange={this.handleChange} />
       <button>Add Class</button>
     </form>
  );
}



};

export default submitClass;
