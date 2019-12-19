import React from 'react';
import './SectionCard.css';
import {Link} from "react-router-dom";

class SectionCard extends React.Component{

  constructor(props) {
      super(props)
        this.state = {
          name:props.sectiontext,
          id: props.sectionid,
          classid: props.classid
        }
    }

  render(){
  return(
    <div className="section_card_box">
        <Link to={{ pathname: '/Section', state: {
          sectionName: this.state.name,
          sectionId: this.state.id,
          classid: this.state.classid
        } }}>
        <p>Knowledge Point: {this.state.name}</p>
        </Link>

    </div>
  );
}

}

export default SectionCard;
