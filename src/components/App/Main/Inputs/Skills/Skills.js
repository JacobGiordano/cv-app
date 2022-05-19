import React, { Component } from 'react';
import uniqid from "uniqid";
import AddButton from '../Card/AddButton/AddButton';
import Card from '../Card/Card';

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
            id={`remove_btn_${i}`}
            className="remove-btn"
            onClick={e => handleRemoveObjFromStateArray(e, stateKey)}
          >&times;</button>
        </div>
      )
    })
    return (
      <>
        <h3>Skills</h3>
        <Card
          children={
            <>
              {skillsArray}
              <AddButton
                btnText={"+ Add A Skill"}
                stateKey={stateKey}
                newObj={newObj}
                onClickFunction={handleAddObjToStateArray}
              ></AddButton>
            </>
          }
        ></Card>
      </>
    )
  }
}

export default Skills;