import React from 'react';
import './KnowledgePointCard.css';
import {Link} from "react-router-dom";

class KnowledgePointCard extends React.Component{

  constructor(props) {
      super(props)
        this.state = {
          name:props.sectiontext,
          //暂时用不到
          //id: props.sectionid
        }
    }

  render(){
  return(
    <div className="Knowledge_card_box">
    <p>{this.state.name}</p>
    </div>
  );
}

}

export default KnowledgePointCard;
