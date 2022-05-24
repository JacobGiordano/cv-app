import React, { Component } from 'react';
import uniqid from "uniqid";
import AddButton from '../Card/AddButton/AddButton';
import Card from '../Card/Card';
import styles from "../Card/Card.module.css";
import { Trash2 } from 'react-feather';

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
        <div 
          key={i}
          className={styles.cardRow}
        >
          <div className={styles.inputWrapper}>
            <label
              htmlFor={`skill_${i}`}
            >{labelText}</label>
            <div className={styles.inputWrapperInnerWrapper}>
              <input
                type="text"
                id={`skill_${i}`}
                onChange={e => handleUpdateObjInStateArray(e, stateKey)}
                value={skill.skill}
              />
              <button 
                id={`remove_btn_${i}`}
                className="remove-btn"
                title="Delete"
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
        <h3>Skills</h3>
        <Card
          children={
            <>
              {skillsArray}
              <div className={`${styles.cardRow} ${styles.addBtnWrapper}`}>  
                <AddButton
                  btnText={"+ Add A Skill"}
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

export default Skills;