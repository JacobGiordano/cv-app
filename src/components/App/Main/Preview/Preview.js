import React, { Component } from "react"
import "./Preview.css";
import ContactPreview from "./ContactPreview/ContactPreview";
import ProfilePreview from "./ProfilePreview/ProfilePreview";

class Preview extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    const {appState} = this.props;
    return (
      <div className="preview">
        <div>Preview</div>
        <ContactPreview 
          appState={appState}
        ></ContactPreview>
        <ProfilePreview appState={appState}></ProfilePreview>
      </div>
    );
  }
}

export default Preview;