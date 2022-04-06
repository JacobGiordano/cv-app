import React, { Component } from 'react';
import uniqid from "uniqid";

class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      profile_text: ""
    }
  }
  render() {
    const sectionId = uniqid();
    return (
      this.state.profile_text && <>
        <h3>Profile</h3>
        <label htmlFor={`profile${sectionId}`}>Profile (optional)</label>
        <textarea id={`profile${sectionId}`}></textarea>
      </>
    );
  }
}

export default Profile;