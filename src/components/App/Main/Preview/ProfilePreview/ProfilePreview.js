import React, { Component } from 'react';
import "./ProfilePreview.css";

class ProfilePreview extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    const {appState} = this.props;
    return (
      <div className="contact-preview">
        <span>{appState.profile.profile}</span>
      </div>
    );
  }
}

export default ProfilePreview;