import React, { Component } from 'react';
import uniqid from "uniqid";

class AchievementsAndAssociations extends Component {
  constructor(props) {
    super(props)

    this.state= {

    }
  }
  render() {
    const stateKey = "achievements_associations";
    const {
      appState,
      handleAddObjToStateArray,
      handleRemoveObjFromStateArray,
      handleUpdateObjInStateArray,
    } = this.props;
    const newObj = {
      id: uniqid(),
      achievement_association: ""
    };
    let achievementsAssociationArray = [];
    appState.achievements_associations.map((aa, i) => {
      let labelText = `Achievement or Association #${i + 1}`;
      return achievementsAssociationArray.push(
        <div key={i}>
          <label
            htmlFor={`achievement_association_${i}`}
          >{labelText}</label>
          <input
            type="text"
            id={`achievement_association_${i}`}
            onChange={e => handleUpdateObjInStateArray(e, stateKey)}
            value={aa.achievement_association}
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
        <h3>Achievements and Associations</h3>
        {achievementsAssociationArray}
        <button
          onClick={() => handleAddObjToStateArray(stateKey, newObj)}
        >
          + Add An Achievement or Association
        </button>
      </>
    )
  }
}

export default AchievementsAndAssociations;