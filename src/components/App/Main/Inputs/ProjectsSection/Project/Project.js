import React, { Component } from 'react';

class Project extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    const stateKey = "projects";
    const arrayKey = "responsibilities";
    const statePropKey = "responsibility";
    const {
      elementKey,
      projectData,
      handleRemoveObjFromStateArray,
      handleUpdateObjInStateArray,
      handleAddObjToNestedArray,
      handleChangeArrayObjInStateObjArray,
      handleRemoveObjFromNestedArray
    } = this.props;
    let responsibilitiesArray = [];
    projectData.responsibilities.map((resp, i) => {
      let labelText = `Responsibility #${i + 1}`;
      return responsibilitiesArray.push(
        <div key={i}>
          <label
            htmlFor={`responsibility_${i}`}
          >{labelText}</label>
          <input
            type="text"
            id={`responsibility_${i}`}
            onChange={e => handleChangeArrayObjInStateObjArray(e, stateKey, arrayKey)}
            value={resp.responsibility}
          />
          <button
            id={`responsibility_delete_btn_${i}`}
            onClick={e => handleRemoveObjFromNestedArray(e, stateKey, arrayKey)}
          >&times;</button>
        </div>
      )
    })
    return (
      <div className="card" id={`project_${elementKey}`}>
        <div className="card-title">
          <h4>Project #{elementKey + 1}</h4>
          <button 
            id={`remove_card_btn_${elementKey}`}
            className="remove-card-btn"
            onClick={e => handleRemoveObjFromStateArray(e, stateKey)}
          >&times;</button>
        </div>
        <label htmlFor={`project`}>Project Name</label>
        <input
          type="text"
          id={`project_${elementKey}`}
          name={`project_${elementKey}`}
          value={projectData.project}
          onChange={e => handleUpdateObjInStateArray(e, stateKey)}
        />
        <label htmlFor={`role_position`}>Role / Position</label>
        <input
          type="text"
          id={`role_position_${elementKey}`}
          name={`role_position_${elementKey}`}
          value={projectData.role_position}
          onChange={e => handleUpdateObjInStateArray(e, stateKey)}
        />
        <div>
          <label htmlFor={`start_date`}>Start Date</label>
          <input
            type="text"
            id={`start_date_${elementKey}`}
            name={`start_date_${elementKey}`}
            value={projectData.start_date}
            onChange={e => handleUpdateObjInStateArray(e, stateKey)}
          />
          <label htmlFor={`end_date`}>End Date</label>
          <input
            type="text"
            id={`end_date_${elementKey}`}
            name={`end_date_${elementKey}`}
            value={projectData.end_date}
            onChange={e => handleUpdateObjInStateArray(e, stateKey)}
          />
        </div>
        <div>
          {responsibilitiesArray}
        </div>
        <button
          onClick={(e) => handleAddObjToNestedArray(e, stateKey, arrayKey, statePropKey)}
        >
          + Add A Responsibility
        </button>
      </div>
    )
  }
}

export default Project;