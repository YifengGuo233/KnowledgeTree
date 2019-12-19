import React from 'react';
import './Profile.css';
import {Link} from "react-router-dom";

class Profile extends React.Component{

  constructor(props) {
      super(props)
        this.state = {

        }
    }

  render(){
  return(
    <div id="profile_box">
    <p id="profile_username">Username</p>
    <img id="profile_image" src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Washington_University_Bears_primary_athletic_logo.png" alt="Profile" />
    <p class="profile_info">Level: </p>
    <p class="profile_info">Location: </p>
    </div>
  );
}

}

export default Profile;
