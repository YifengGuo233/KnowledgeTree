import React from 'react';
import './Home.css';
import './Section.css';
import SectionCard from './components/SectionCard';
import firebase from './config/fbconfig.js'
//https://www.npmjs.com/package/@fortawesome/react-fontawesome
import KnowledgePointCard from './components/KnowledgePointCard';


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
      this.handleChange = this.handleChange.bind(this);
    }

componentDidMount(){
  const itemsRef = firebase.database().ref('course/'+this.state.classid+"/section/"+this.state.sectionId);
  itemsRef.on('value', (snapshot) => {
    let grabed_items = snapshot.val();
    console.log(grabed_items.content);
    this.setState({
      content: grabed_items.content
    });
  });
}

  handleSubmit(e) {
    e.preventDefault();
    const sectionRef = firebase.database().ref('course/'+this.state.classid+"/section/"+this.state.sectionId);
    const note = {
      name: this.state.sectionName,
      content: this.state.content
    }
    console.log(sectionRef)
    console.log(note)
    sectionRef.set(note);
  }


  handleChange(){
    var notehtml = document.getElementById("mainnote").value;
    this.setState({
      content: notehtml
    });
  }


render() {
  return (
    <div id="main_canvas">
    <KnowledgePointCard
    sectiontext={this.state.sectionName}
    />
    <div class="wrap">
     <div class="toolbar">
        <button id="bold" title="Bold" class="bnt"><i class="fas fa-bold"></i></button>
        <button id="italic" title="Italic" class="bnt"><i class="fas fa-italic"></i></button>
        <button id="underilne" title="Underilne" class="bnt"><i class="fa fa-underline"></i></button>
    <form onSubmit={this.handleSubmit} autoComplete="off">
    <input id="submitinput" type="submit"/>
    <textarea onChange={this.handleChange} id="mainnote" type="text" name="note" value={this.state.content}></textarea>
    </form>
    </div>
    </div>
    </div>
  );

};

}

export default Class;
