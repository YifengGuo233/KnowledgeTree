import React from 'react';
import './Card.css';
import {Link} from "react-router-dom";

class Card extends React.Component{

  constructor(props) {
      super(props)
        this.state = {
          name:props.nametext,
          id: props.classid
        }
    }

  render(){
  return(
    <div className="card_box btn-lighteffect">
        <Link to={{ pathname: '/Class', state: {
          currentClass: this.props.nametext,
          currentClassId: this.props.classid
        } }}>
        <p>Course Name: {this.props.nametext}</p>
        <p>Instructor Name:</p>
        </Link>
    </div>
  );
}

}

export default Card;
