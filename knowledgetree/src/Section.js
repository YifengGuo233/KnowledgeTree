import React from 'react';
import './Home.css';
import './Section.css';
import SectionCard from './components/SectionCard';
import firebase from './config/fbconfig.js'


class Class extends React.Component {

  constructor(props) {
    console.log(props);
      super(props);
      this.state = {
        sectionName:props.location.state.sectionName,
        sectionId:props.location.state.sectionId,
        classid: props.location.state.classid,
        content: ""
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      console.log("sss"+this.state.classid)
    }

    componentWillUnmount() {
        this._isMounted = false;
      }

      componentDidMount() {
          this._isMounted = true;
      }

  handleSubmit(e) {
    e.preventDefault();
    if(this._isMounted){
    const sectionRef = firebase.database().ref('course/'+this.state.classid+"/section/"+this.state.sectionId);
    const note = {
      content: this.state.content
    }
    console.log(sectionRef)
    sectionRef.push(note);
    // this.setState({
    //   sectionname: ''
    // });
  }
  else{
    alert("整啥呢你");
  }
  }

render() {
  return (
    <div id="main_canvas">
    <SectionCard
    key={this.state.sectionId}
    sectiontext={this.state.sectionName}
    sectionid={this.state.sectionId}
    />
    <form onSubmit={this.handleSubmit} autoComplete="off">
    <textarea id="mainnote" type="text" name="note"></textarea>
    <input type="submit"/>
    </form>
    </div>
  );

};

}

export default Class;
