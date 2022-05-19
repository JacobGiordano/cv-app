import React, { Component } from 'react';
import AddButton from '../../Card/AddButton/AddButton';
import Card from '../../Card/Card';

class WorkExperience extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    const stateKey = "work_experience";
    const arrayKey = "responsibilities";
    const statePropKey = "responsibility";
    const {
      elementKey,
      workExperienceData,
      handleRemoveObjFromStateArray,
      handleUpdateObjInStateArray,
      handleAddObjToNestedArray,
      handleChangeArrayObjInStateObjArray,
      handleRemoveObjFromNestedArray
    } = this.props;
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
      <Card
        children={
          <div className="card" id={`work_experience_${elementKey}`}>
            <div className="card-title">
              <h4>Work Experience #{elementKey + 1}</h4>
              <button 
                id={`remove_card_btn_${elementKey}`}
                className="remove-card-btn"
                onClick={e => handleRemoveObjFromStateArray(e, stateKey)}
              >&times;</button>
            </div>
            <label htmlFor={`company`}>Company Name</label>
            <input
              type="text"
              id={`company_${elementKey}`}
              name={`company_${elementKey}`}
              value={workExperienceData.company}
              onChange={e => handleUpdateObjInStateArray(e, stateKey)}
            />
            <label htmlFor={`role_position`}>Role / Position</label>
            <input
              type="text"
              id={`role_position_${elementKey}`}
              name={`role_position_${elementKey}`}
              value={workExperienceData.role_position}
              onChange={e => handleUpdateObjInStateArray(e, stateKey)}
            />
            <label htmlFor={`location_${elementKey}`}>Location</label>
            <input
              type="text"
              id={`location_${elementKey}`}
              name={`location_${elementKey}`}
              value={workExperienceData.location}
              onChange={e => handleUpdateObjInStateArray(e, stateKey)}
            />
            <div>
              <label htmlFor={`start_date`}>Start Date</label>
              <input
                type="text"
                id={`start_date_${elementKey}`}
                name={`start_date_${elementKey}`}
                value={workExperienceData.start_date}
                onChange={e => handleUpdateObjInStateArray(e, stateKey)}
              />
              <label htmlFor={`end_date`}>End Date</label>
              <input
                type="text"
                id={`end_date_${elementKey}`}
                name={`end_date_${elementKey}`}
                value={workExperienceData.end_date}
                onChange={e => handleUpdateObjInStateArray(e, stateKey)}
              />
            </div>
            <div>
              {responsibilitiesArray}
            </div>
            <AddButton
              btnText={"+ Add A Responsibility"}
              stateKey={stateKey}
              arrayKey={arrayKey}
              statePropKey={statePropKey}
              onClickFunction={handleAddObjToNestedArray}
            ></AddButton>
          </div>
        }
      ></Card>
    )
  }
}

export default WorkExperience;