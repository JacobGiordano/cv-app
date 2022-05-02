import React, { Component } from 'react';

class WorkExperience extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    const stateKey = "work_experience";
    const arrayKey = "responsibilities";
    const propertyKey = "responsibility";
    const {elementKey, appState, handleChange, handleAddObjToObjArray, handleChangeObjInObjArray, workExperienceData} = this.props;
    let responsibilitiesArray = [];
    workExperienceData.responsibilities.map((resp, i) => {
      let labelText = `Responsibility #${i + 1}`;
      return responsibilitiesArray.push(
        <div key={i}>
          <label
            htmlFor={`responsibility_${i}`}
          >{labelText}</label>
          <input
            type="text"
            id={`responsibility_${i}`}
            onChange={e => handleChangeObjInObjArray(e, stateKey, arrayKey, propertyKey)}
            value={resp.responsibility}
          />
        </div>
      )
    })
    return (
      <div className="card" id={`work_experience_${elementKey}`}>
        <label htmlFor={`company`}>Company Name</label>
        <input
          type="text"
          id={`company_${elementKey}`}
          name={`company_${elementKey}`}
          value={appState.work_experience[`company_${elementKey}`]}
          onChange={e => handleChange(e, stateKey)}
        />
        <label htmlFor={`role_position`}>Role / Position</label>
        <input
          type="text"
          id={`role_position_${elementKey}`}
          name={`role_position_${elementKey}`}
          value={appState.work_experience[`role_position_${elementKey}`]}
          onChange={e => handleChange(e, stateKey)}
        />
        <label htmlFor={`location_${elementKey}`}>Location</label>
        <input
          type="text"
          id={`location_${elementKey}`}
          name={`location_${elementKey}`}
          value={appState.work_experience[`location_${elementKey}`]}
          onChange={e => handleChange(e, stateKey)}
        />
        <div>
          <label htmlFor={`start_date`}>Start Date</label>
          <input
            type="text"
            id={`start_date_${elementKey}`}
            name={`start_date_${elementKey}`}
            value={appState.work_experience[`start_date_${elementKey}`]}
            onChange={e => handleChange(e, stateKey)}
          />
          <label htmlFor={`end_date`}>End Date</label>
          <input
            type="text"
            id={`end_date_${elementKey}`}
            name={`end_date_${elementKey}`}
            value={appState.work_experience[`end_date_${elementKey}`]}
            onChange={e => handleChange(e, stateKey)}
          />
        </div>
        <div>
          {responsibilitiesArray}
        </div>
        <button
          onClick={() => handleAddObjToObjArray(stateKey, arrayKey, propertyKey)}
        >
          + Add website
        </button>
      </div>
    )
  }
}

export default WorkExperience;