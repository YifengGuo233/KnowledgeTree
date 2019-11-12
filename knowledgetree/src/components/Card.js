import React from 'react';
import './Card.css';
import {Link} from "react-router-dom";

class Card extends React.Component{

  constructor(props) {
      super(props)
        this.state = {
          name:props.nametext
        }
    }

  render(){
  return(
    <div className="card_box btn-lighteffect">
        <Link to={{ pathname: '/Class', state: {currentClass: this.props.nametext} }}>
        <p>Course name: {this.props.nametext}</p>
        <p>aa</p>
        </Link>
    </div>
  );
}

}

export default Card;
