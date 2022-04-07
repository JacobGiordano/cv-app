import React, { Component } from 'react';
import uniqid from "uniqid";

class achievementsAssociations extends Component {
  constructor(props) {
    super(props)

    this.state= {
      achievementss_associations: [
        {
          id: uniqid(),
          achievements_association: ""
        }
      ]
    }
  }
  render() {
    const sectionId = uniqid();
    let achievementsAssociationsArray = [];
    this.state.achievementss_associations.map((aa, i) => {
      let labelText = `Achievements / Association #${i + 1}`;
      return achievementsAssociationsArray.push(
        <div key={uniqid()}>
          <label
            htmlFor={`achievement_association${sectionId}_${i}`}
          >{labelText}</label>
          <input
            type="text"
            id={`achievement_association${sectionId}_${i}`}
            // value={aa.achievements_association}
          />
        </div>
      )
    })
    return (
      this.state.achievementss_associations &&
      this.state.achievementss_associations[0].achievements_association &&
      <>
        <h3>Achievements and Associations</h3>
        {achievementsAssociationsArray}
      </>
    )
  }
}

export default achievementsAssociations;