import React, { Component } from 'react';
import uniqid from "uniqid";

class Skills extends Component {
  constructor(props) {
    super(props)

    this.state= {

    }
  }
  render() {
    const stateKey = "skills";
    const {
      appState,
      handleAddObjToStateArray,
      handleRemoveObjFromStateArray,
      handleUpdateObjInStateArray,
    } = this.props;
    const newObj = {
      id: uniqid(),
      skill: ""
    };
    let skillsArray = [];
    appState.skills.map((skill, i) => {
      let labelText = `Skill #${i + 1}`;
      return skillsArray.push(
        <div key={i}>
          <label
            htmlFor={`skill_${i}`}
          >{labelText}</label>
          <input
            type="text"
            id={`skill_${i}`}
            onChange={e => handleUpdateObjInStateArray(e, stateKey)}
            value={skill.skill}
          />
          <button 
            id={`remove_card_btn_${i}`}
            className="remove-card-btn"
            onClick={e => handleRemoveObjFromStateArray(e, stateKey)}
          >&times;</button>
        </div>
      )
    })
    return (
      <>
        <h3>Skills</h3>
        {skillsArray}
        <button
          onClick={() => handleAddObjToStateArray(stateKey, newObj)}
        >
          + Add A Skill
        </button>
      </>
    )
  }
}

export default Skills;