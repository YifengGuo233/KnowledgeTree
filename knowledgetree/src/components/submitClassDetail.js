import React from 'react';
import './submitClass.css';
import firebase from '../config/fbconfig.js'

class submitClassDetail extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        sectionname: '',
      }
  //Since we're using ES6 classes and need access to this
  //in our handleChange method, we'll also need to bind it
  //back in our constructor() component like this:
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillUnmount() {
        this._isMounted = false;
      }

      componentDidMount() {
          this._isMounted = true;
      }

    handleChange(e) {
      this.setState({
        sectionname: e.target.value
      });
    }

    handleSubmit(e) {
      e.preventDefault();
      if(this.state.sectionname && this._isMounted){
      const sectionRef = firebase.database().ref('course/'+this.props.classid+"/section/");
      const section = {
        name: this.state.sectionname
      }
      sectionRef.push(section);
      this.setState({
        sectionname: ''
      });
      document.getElementById("input_section_name").value = "";
    }
    else{
      alert("整啥呢你");
    }
    }



render() {
  return(
    <div className="wrapper">
    <form onSubmit={this.handleSubmit} autoComplete="off">
        <input type="text" id="input_section_name" name="addSection" onChange={this.handleChange} required />
        <label htmlFor="addSection">
            <span>
                Add Section
            </span>
        </label>
        </form>
    </div>
  );
}



};

export default submitClassDetail;
