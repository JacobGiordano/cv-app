import React, { Component } from 'react';
import uniqid from "uniqid";
import WorkExperience from './WorkExperience/WorkExperience';

class WorkExperienceSection extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    const stateKey = "work_experience";
    const {
      appState,
      handleAddObjToObjArray,
      handleAddObjToNestedArray,
      handleChangeArrayObjInStateObjArray,
      handleAddObjToStateArray,
      handleUpdateObjInStateArray
    } = this.props;
    const newObj = {
      id: uniqid(),
      company: "",
      role_position: "",
      location: "",
      start_date: "",
      end_date: "",
      responsibilities: [
        {
          id: uniqid(),
          responsibility: ""
        }
      ]
    };
    let workExperienceArray = [];
    appState.work_experience.map((experience, i) => {
      return workExperienceArray.push(<WorkExperience
        key={i}
        elementKey={i}
        appState={appState}
        handleAddObjToObjArray={handleAddObjToObjArray}
        handleAddObjToNestedArray={handleAddObjToNestedArray}
        handleChangeArrayObjInStateObjArray={handleChangeArrayObjInStateObjArray}
        handleUpdateObjInStateArray={handleUpdateObjInStateArray}
        workExperienceData={experience}
      ></WorkExperience>)
    })
    return (
      <>
        <h3>Work Experience</h3>
        {workExperienceArray}
        <button
          onClick={() => handleAddObjToStateArray(stateKey, newObj)}
        >
          + Add Work Experience
        </button>
      </>
    )
  }
}

export default WorkExperienceSection;