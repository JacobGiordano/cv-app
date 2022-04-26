import React, { Component } from 'react';
import uniqid from "uniqid";

class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      profile_text: ""
    }
  }
  handleChange = (e) => {
    this.setState({profile_text: e.target.value});
  }
  render() {
    const sectionId = uniqid();
    return (
      <>
        <h3>Profile</h3>
        <label htmlFor={`profile${sectionId}`}>Profile (optional)</label>
        <textarea
          id={`profile${sectionId}`}
          onChange={e => this.handleChange(e)}
          value={this.state.profile_text}
        ></textarea>
      </>
    );
  }
}

export default Profile;