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
    const {appState, handleChange, handleAddArrayObj, handleChangeArrayObj, workExperienceData} = this.props;
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
            onChange={e => handleChangeArrayObj(e, stateKey, arrayKey, propertyKey)}
            value={resp.responsibility}
          />
        </div>
      )
    })
    return (
      <>
        <label htmlFor={`company`}>Company Name</label>
        <input
          type="text"
          id={`company`}
          name={`company`}
          value={appState.work_experience[`company`]}
          onChange={e => handleChange(e, stateKey)}
        />
        <label htmlFor={`role_position`}>Role / Position</label>
        <input
          type="text"
          id={`role_position`}
          name={`role_position`}
          value={appState.work_experience[`role_position`]}
          onChange={e => handleChange(e, stateKey)}
        />
        <label htmlFor={`location`}>Location</label>
        <input
          type="text"
          id={`location`}
          name={`location`}
          value={appState.work_experience[`location`]}
          onChange={e => handleChange(e, stateKey)}
        />
        <div>
          <label htmlFor={`start_date`}>Start Date</label>
          <input
            type="text"
            id={`start_date`}
            name={`start_date`}
            value={appState.work_experience[`start_date`]}
            onChange={e => handleChange(e, stateKey)}
          />
          <label htmlFor={`end_date`}>End Date</label>
          <input
            type="text"
            id={`end_date`}
            name={`end_date`}
            value={appState.work_experience[`end_date`]}
            onChange={e => handleChange(e, stateKey)}
          />
        </div>
        <div>
          {responsibilitiesArray}
        </div>
        <button
          onClick={() => handleAddArrayObj(stateKey, arrayKey, propertyKey)}
        >
          + Add website
        </button>
      </>
    )
  }
}

export default WorkExperience;