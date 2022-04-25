import React, { Component } from 'react';
import uniqid from "uniqid";

class Projects extends Component {
  constructor(props) {
    super(props)

    this.state = {
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
    }
  }
  render() {
    const sectionId = uniqid();
    let responsibilitiesArray = [];
    this.state.responsibilities.map((resp, i) => {
      let labelText = `Responsibility #${i + 1}`;
      return responsibilitiesArray.push(
        <div key={uniqid()}>
          <label
            htmlFor={`responsibility_${sectionId}_${i}`}
          >{labelText}</label>
          <input
            type="text"
            id={`responsibility_${sectionId}_${i}`}
            // value={resp.responsibility}
          />
        </div>
      )
    })
    return (
      <>
        <h3>Projects</h3>
        <label htmlFor={`project_name_${sectionId}`}>Project Name</label>
        <input type="text" id={`project_name_${sectionId}`} />
        <label htmlFor={`role_position_${sectionId}`}>Role / Position</label>
        <input type="text" id={`role_position_${sectionId}`} />
        <div>
          <label htmlFor={`start_date_${sectionId}`}>Start Date</label>
          <input type="text" id={`start_date_${sectionId}`} />
          <label htmlFor={`end_date_${sectionId}`}>End Date</label>
          <input type="text" id={`end_date_${sectionId}`} />
        </div>
        <div>
          {responsibilitiesArray}
        </div>
      </>
    )
  }
}

export default Projects;