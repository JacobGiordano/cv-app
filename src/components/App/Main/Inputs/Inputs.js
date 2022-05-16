import React, { Component } from "react";
import "./Inputs.css"
import AchievementsAndAssociations from "./AchievementsAndAssociations/AchievementsAndAssociations";
import Contact from "./Contact/Contact";
import Profile from "./Profile/Profile";
import ProjectsSection from "./ProjectsSection/ProjectsSection";
import Skills from "./Skills/Skills";
import WorkExperienceSection from "./WorkExperienceSection/WorkExperienceSection";
import EducationSection from "./EducationSection/EducationSection";

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
      handleAddObjToStateArray,
      handleRemoveObjFromStateArray,
      handleUpdateObjInStateArray,
      handleAddObjToNestedArray,
      handleRemoveObjFromNestedArray,
      handleChangeArrayObjInStateObjArray,
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
          handleAddObjToStateArray={handleAddObjToStateArray}
          handleRemoveObjFromStateArray={handleRemoveObjFromStateArray}
          handleUpdateObjInStateArray={handleUpdateObjInStateArray}
          handleAddObjToNestedArray={handleAddObjToNestedArray}
          handleRemoveObjFromNestedArray={handleRemoveObjFromNestedArray}
          handleChangeArrayObjInStateObjArray={handleChangeArrayObjInStateObjArray}
        ></WorkExperienceSection>
        <ProjectsSection
          appState={appState}
          handleAddObjToStateArray={handleAddObjToStateArray}
          handleRemoveObjFromStateArray={handleRemoveObjFromStateArray}
          handleUpdateObjInStateArray={handleUpdateObjInStateArray}
          handleAddObjToNestedArray={handleAddObjToNestedArray}
          handleRemoveObjFromNestedArray={handleRemoveObjFromNestedArray}
          handleChangeArrayObjInStateObjArray={handleChangeArrayObjInStateObjArray}
        ></ProjectsSection>
        <Skills
          appState={appState}
          handleAddObjToStateArray={handleAddObjToStateArray}
          handleRemoveObjFromStateArray={handleRemoveObjFromStateArray}
          handleUpdateObjInStateArray={handleUpdateObjInStateArray}
        ></Skills>
        <EducationSection
          appState={appState}
          handleAddObjToStateArray={handleAddObjToStateArray}
          handleRemoveObjFromStateArray={handleRemoveObjFromStateArray}
          handleUpdateObjInStateArray={handleUpdateObjInStateArray}
          handleAddObjToNestedArray={handleAddObjToNestedArray}
          handleRemoveObjFromNestedArray={handleRemoveObjFromNestedArray}
          handleChangeArrayObjInStateObjArray={handleChangeArrayObjInStateObjArray}
        ></EducationSection>
        <AchievementsAndAssociations
          appState={appState}
          handleChange={handleChange}
          handleAddObjToObjArray={handleAddObjToObjArray}
          handleChangeObjInObjArray={handleChangeObjInObjArray}
        ></AchievementsAndAssociations>
      </div>
    )
  }
}

export default Inputs;