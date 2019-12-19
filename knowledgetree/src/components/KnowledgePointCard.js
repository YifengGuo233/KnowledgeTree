import React from 'react';
import './KnowledgePointCard.css';
import {Link} from "react-router-dom";

class KnowledgePointCard extends React.Component{

  constructor(props) {
      super(props)
        this.state = {
          name:props.sectiontext,
          id: props.sectionid
        }
    }

  render(){
  return(
    <div className="Knowledge_card_box">
    </div>
  );
}

}

export default KnowledgePointCard;
