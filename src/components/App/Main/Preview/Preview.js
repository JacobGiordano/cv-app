import React, { Component } from "react"
import "./Preview.css";
import ContactPreview from "./ContactPreview/ContactPreview";
import ProfilePreview from "./ProfilePreview/ProfilePreview";
import WorkExperiencePreview from "./WorkExperiencePreview/WorkExperiencePreview";
import ProjectsPreview from "./ProjectsPreview/ProjectsPreview";
import SkillsPreview from "./SkillsPreview/SkillsPreview";
import EducationPreview from "./EducationPreview/EducationPreview";
import AchievementsAndAssociationsPreview from "./AchievementsAndAssociationsPreview/AchievementsAndAssociationsPreview";

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
    const projects = appState.projects.map((obj, i) => <ProjectsPreview
      key={i}
      objData={obj}
    ></ProjectsPreview>)
    const skills = appState.skills.map((obj, i) => <SkillsPreview
      key={i}
      objData={obj}
    ></SkillsPreview>)
    const education = appState.education.map((obj, i) => <EducationPreview
      key={i}
      objData={obj}
    ></EducationPreview>)
    const achievementsAndAssociations = appState.achievements_associations.map((obj, i) => <AchievementsAndAssociationsPreview
      key={i}
      objData={obj}
    ></AchievementsAndAssociationsPreview>)
    const aAValues = appState.achievements_associations.map(obj => obj.achievement_association.trim() !== "" ? obj : null).join("");
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
        <div>
          <h3>Skills</h3>
          {skills}
        </div>
        <div>
          <h3>Education</h3>
          {education}
        </div>
        {aAValues && <div>
          <h3>Achievements and Associations</h3>
          {achievementsAndAssociations}
        </div>}
      </div>
    );
  }
}

export default Preview;