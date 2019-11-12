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
    <div className="wrapper">
    <form onSubmit={this.handleSubmit} autoComplete="off">
        <input type="text" id="input_course_name" name="addClass" onChange={this.handleChange} required />
        <label htmlFor="addClass">
            <span>
                Course Name
            </span>
        </label>
        </form>
    </div>
  );
}



};

export default submitClass;
