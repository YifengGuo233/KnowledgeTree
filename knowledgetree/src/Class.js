import React from 'react';
import './Class.css';
import SubmitClassDetail from './components/submitClassDetail';
import SectionCard from './components/SectionCard';
import firebase from './config/fbconfig.js'

class Class extends React.Component {

  constructor(props) {
    console.log(props);
      super(props);
      this.state = {
        sectionlist: [],
        currentClass:props.location.state.currentClass,
        currentClassId:props.location.state.currentClassId
      }
      const itemsRef = firebase.database().ref('course/'+this.state.currentClassId+"/section/");
    }

 componentWillUnmount() {
   console.log("WillUnmount")
}
    componentDidMount() {
      const itemsRef = firebase.database().ref('course/'+this.state.currentClassId+"/section/");
      itemsRef.on('value', (snapshot) => {
        let grabed_items = snapshot.val();
        //console.log(grabed_items);
        let newsectionlist = [];
        for (let item in grabed_items) {
          newsectionlist.push({
            key: item,
            value: grabed_items[item].name
          });
        }
        this.setState({
          sectionlist: newsectionlist
        });
        console.log(this.state.sectionlist)
      });
    }

render() {
  return (
    <div>
    <p>Class Page</p>
    <p>{this.state.currentClass}</p>
    <SubmitClassDetail
    classname = {this.state.currentClass}
    classid = {this.state.currentClassId}
    />
    <div className="grid-container">
    {this.state.sectionlist.map((element, index) =>
          <SectionCard
          key={element.key}
          sectiontext={element.value}
          sectionid={element.key}
          classid = {this.state.currentClassId}
          />
        )}
        </div>
      </div>
  );

};

}

export default Class;
