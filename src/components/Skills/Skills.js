import React, { Component } from 'react';
import uniqid from "uniqid";

class Skills extends Component {
  constructor(props) {
    super(props)

    this.state= {
      skills: [
        {
          id: uniqid(),
          skill: ""
        }
      ]
    }
  }
  render() {
    const sectionId = uniqid();
    let skillsArray = [];
    this.state.skills.map((skill, i) => {
      let labelText = `Skill #${i + 1}`;
      return skillsArray.push(
        <div key={uniqid()}>
          <label
            htmlFor={`skill_${sectionId}_${i}`}
          >{labelText}</label>
          <input
            type="text"
            id={`skill_${sectionId}_${i}`}
            // value={skill.skill}
          />
        </div>
      )
    })
    return (
      <>
        <h3>Skills</h3>
        {skillsArray}
      </>
    )
  }
}

export default Skills;