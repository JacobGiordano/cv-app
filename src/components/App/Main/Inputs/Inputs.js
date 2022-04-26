import React, { Component } from "react";
import "./Inputs.css"
import AchievementsAndAssociations from "./AchievementsAndAssociations/AchievementsAndAssociations";
import Contact from "./Contact/Contact";
import Education from "./Education/Education";
import Profile from "./Profile/Profile";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import WorkExperience from "./WorkExperience/WorkExperience";

class Inputs extends Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }
  render() {
    const {appState, handleChange, handleAddArrayObj, handleChangeArrayObj} = this.props;
    return (
      <div className="inputs">
        <div>Inputs</div>
        <Contact
          appState={appState}
          handleChange={handleChange}
          handleAddArrayObj={handleAddArrayObj}
          handleChangeArrayObj={handleChangeArrayObj}
        ></Contact>
        <Profile
          appState={appState}
          handleChange={handleChange}></Profile>
        <WorkExperience
          appState={appState}
          handleChange={handleChange}
          handleAddArrayObj={handleAddArrayObj}
          handleChangeArrayObj={handleChangeArrayObj}></WorkExperience>
        <Projects
          appState={appState}
          handleChange={handleChange}
          handleAddArrayObj={handleAddArrayObj}
          handleChangeArrayObj={handleChangeArrayObj}></Projects>
        <Skills
          appState={appState}
          handleChange={handleChange}
          handleAddArrayObj={handleAddArrayObj}
          handleChangeArrayObj={handleChangeArrayObj}></Skills>
        <Education
          appState={appState}
          handleChange={handleChange}
          handleAddArrayObj={handleAddArrayObj}
          handleChangeArrayObj={handleChangeArrayObj}></Education>
        <AchievementsAndAssociations
          appState={appState}
          handleChange={handleChange}
          handleAddArrayObj={handleAddArrayObj}
          handleChangeArrayObj={handleChangeArrayObj}></AchievementsAndAssociations>
      </div>
    )
  }
}

export default Inputs;