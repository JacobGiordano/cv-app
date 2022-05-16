import React, { Component } from 'react';

class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    const stateKey = "profile";
    const {appState, handleChange} = this.props;
    return (
      <>
        <h3>Profile</h3>
        <label htmlFor={`profile`}>Profile (optional)</label>
        <textarea
          id={`profile`}
          value={appState.profile.profile}
          name="profile"
          onChange={e => handleChange(e, stateKey)}
        ></textarea>
      </>
    );
  }
}

export default Profile;