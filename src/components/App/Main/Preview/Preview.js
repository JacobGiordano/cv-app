import React, { Component } from "react"
import "./Preview.css";
import ContactPreview from "./ContactPreview/ContactPreview";
import ProfilePreview from "./ProfilePreview/ProfilePreview";
import WorkExperiencePreview from "./WorkExperiencePreview/WorkExperiencePreview";
import ProjectsPreview from "./ProjectsPreview/ProjectsPreview";

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
      objData={obj}
    ></WorkExperiencePreview>)
    const projects = appState.projects.map((obj, i) => 
    <ProjectsPreview
      key={i}
      objData={obj}
    ></ProjectsPreview>)
    return (
      <div className="preview">
        <div>Preview</div>
        <ContactPreview 
          appState={appState}
        ></ContactPreview>
        <ProfilePreview
          appState={appState}
        ></ProfilePreview>
        <div>
          <h3>Work Experience</h3>
          {workExperience}
        </div>
        <div>
          <h3>Projects</h3>
          {projects}
        </div>
      </div>
    );
  }
}

export default Preview;