import React from 'react';
import './Home.css';
import Card from './components/Card';
import SubmitClass from './components/submitClass';
import firebase from './config/fbconfig.js'
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
        newclasslist.push({
          key: item,
          value: grabed_items[item].name
        });
      }
      this.setState({
        classlist: newclasslist
      });
    });
  }


render() {
  return (
    <div id="home_canvas">

    <SubmitClass />
    <div className="grid-container">
    {this.state.classlist.map((element, index) =>
          <Card
          key={element.key}
          nametext={element.value}
          classid={element.key.toString()}
          />
        )}
    </div>
    </div>
  );

};

}

export default Home;
