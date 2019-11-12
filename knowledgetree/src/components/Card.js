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
    <div className="card_box">

      <p></p>
        <Link to={{ pathname: '/Class', state: {currentClass: this.props.nametext} }}>{this.props.nametext}</Link>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </div>
  );
}

}

export default Card;
