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
    return (
      <div className="inputs">
        <div>Inputs</div>
        <Contact></Contact>
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