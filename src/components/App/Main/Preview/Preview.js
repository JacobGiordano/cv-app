import React, { Component } from "react"
import "./Preview.css";
import ContactPreview from "./ContactPreview/ContactPreview";
import ProfilePreview from "./ProfilePreview/ProfilePreview";
import WorkExperiencePreview from "./WorkExperiencePreview/WorkExperiencePreview";

class Preview extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    const {appState} = this.props;
    const workExperience = appState.work_experience.map((obj, i) => <WorkExperiencePreview
      key={i}
      objData={appState.work_experience[i]}
    ></WorkExperiencePreview>)
    return (
      <div className="preview">
        <div>Preview</div>
        <ContactPreview 
          appState={appState}
        ></ContactPreview>
        <ProfilePreview
          appState={appState}
        ></ProfilePreview>
        {workExperience}
      </div>
    );
  }
}

export default Preview;