import React, { Component } from 'react';
import uniqid from "uniqid";
import AddButton from '../Card/AddButton/AddButton';
import Card from '../Card/Card';
import styles from "../Card/Card.module.css";
import { Trash2 } from 'react-feather';

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
        <div
          key={i}
          className={styles.cardRow}
        >
          <div className={styles.inputWrapper}>
            <label
              htmlFor={`achievement_association_${i}`}
            >{labelText}</label>
            <div className={styles.inputWrapperInnerWrapper}>
              <input
                type="text"
                id={`achievement_association_${i}`}
                onChange={e => handleUpdateObjInStateArray(e, stateKey)}
                value={aa.achievement_association}
              />
              <button 
                id={`remove_btn_${i}`}
                title="Delete"
                className="remove-btn"
                onClick={e => handleRemoveObjFromStateArray(e, stateKey)}
              >
                <Trash2
                  size={16}
                ></Trash2>
              </button>
            </div>
          </div>
        </div>
      )
    })
    return (
      <>
        <h3>Achievements and Associations (Optional)</h3>
        <Card
          children={
            <>
              {achievementsAssociationArray}
              <div className={`${styles.cardRow} ${styles.addBtnWrapper}`}>
                <AddButton
                  btnText={"+ Add An Achievement or Association"}
                  stateKey={stateKey}
                  newObj={newObj}
                  onClickFunction={handleAddObjToStateArray}
                ></AddButton>
              </div>
            </>
          }
        ></Card>
      </>
    )
  }
}

export default AchievementsAndAssociations;