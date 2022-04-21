import React, { Component } from "react";
import AchievementsAndAssociations from "../AchievementsAndAssociations/AchievementsAndAssociations";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import Profile from "../Profile/Profile";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import WorkExperience from "../WorkExperience/WorkExperience";

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
        <Profile></Profile>
        <WorkExperience></WorkExperience>
        <Projects></Projects>
        <Skills></Skills>
        <Education></Education>
        <AchievementsAndAssociations></AchievementsAndAssociations>
      </div>
    )
  }
}

export default Inputs;