import React, { Component } from "react";
import "./Inputs.css"
import AchievementsAndAssociations from "./AchievementsAndAssociations/AchievementsAndAssociations";
import Contact from "./Contact/Contact";
import Education from "./Education/Education";
import Profile from "./Profile/Profile";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import WorkExperienceSection from "./WorkExperienceSection/WorkExperienceSection";

class Inputs extends Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }
  render() {
    const {
      appState,
      handleChange,
      handleAddObjToObjArray,
      handleRemoveObjFromObjArray,
      handleChangeObjInObjArray,
      handleAddObjToNestedArray,
      handleChangeArrayObjInStateObjArray,
      handleAddObjToStateArray,
      handleUpdateObjInStateArray
    } = this.props;
    return (
      <div className="inputs">
        <div>Inputs</div>
        <Contact
          appState={appState}
          handleChange={handleChange}
          handleAddObjToObjArray={handleAddObjToObjArray}
          handleRemoveObjFromObjArray={handleRemoveObjFromObjArray}
          handleChangeObjInObjArray={handleChangeObjInObjArray}
        ></Contact>
        <Profile
          appState={appState}
          handleChange={handleChange}></Profile>
        <WorkExperienceSection
          appState={appState}
          handleAddObjToNestedArray={handleAddObjToNestedArray}
          handleChangeArrayObjInStateObjArray={handleChangeArrayObjInStateObjArray}
          handleAddObjToStateArray={handleAddObjToStateArray}
          handleUpdateObjInStateArray={handleUpdateObjInStateArray}></WorkExperienceSection>
        <Projects
          appState={appState}
          handleChange={handleChange}
          handleAddObjToObjArray={handleAddObjToObjArray}
          handleChangeObjInObjArray={handleChangeObjInObjArray}></Projects>
        <Skills
          appState={appState}
          handleChange={handleChange}
          handleAddObjToObjArray={handleAddObjToObjArray}
          handleChangeObjInObjArray={handleChangeObjInObjArray}></Skills>
        <Education
          appState={appState}
          handleChange={handleChange}
          handleAddObjToObjArray={handleAddObjToObjArray}
          handleChangeObjInObjArray={handleChangeObjInObjArray}></Education>
        <AchievementsAndAssociations
          appState={appState}
          handleChange={handleChange}
          handleAddObjToObjArray={handleAddObjToObjArray}
          handleChangeObjInObjArray={handleChangeObjInObjArray}></AchievementsAndAssociations>
      </div>
    )
  }
}

export default Inputs;