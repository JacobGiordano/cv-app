import React, { Component } from 'react';
import AddButton from '../../Card/AddButton/AddButton';
import Card from '../../Card/Card';
import styles from "../../Card/Card.module.css";
import { Trash2 } from 'react-feather';

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
        <div 
          key={i}
          className={styles.cardRow}
        >
          <div className={styles.inputWrapper}>
            <label
              htmlFor={`responsibility_${i}`}
            >{labelText}</label>
            <div className={styles.inputWrapperInnerWrapper}>
            <input
              type="text"
              id={`responsibility_${i}`}
              onChange={e => handleChangeArrayObjInStateObjArray(e, stateKey, arrayKey)}
              value={resp.responsibility}
            />
            <button
              id={`responsibility_delete_btn_${i}`}
              className={styles.deleteBtn}
              title="Delete"
              onClick={e => handleRemoveObjFromNestedArray(e, stateKey, arrayKey)}
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
      <Card
        id={`project_${elementKey}`}
        children={
          <>
            <div className={styles.cardTitle}>
              <h4>Project #{elementKey + 1}</h4>
              <button 
                id={`remove_card_btn_${elementKey}`}
                className={styles.deleteBtn}
                title="Delete"
                onClick={e => handleRemoveObjFromStateArray(e, stateKey)}
              >
                <Trash2
                  size={16}
                ></Trash2>
              </button>
            </div>
            <div className={styles.cardRow}>
              <div className={styles.inputWrapper}>
                <label htmlFor={`project`}>Project Name</label>
                <input
                  type="text"
                  id={`project_${elementKey}`}
                  name={`project_${elementKey}`}
                  value={projectData.project}
                  onChange={e => handleUpdateObjInStateArray(e, stateKey)}
                />
              </div>
              <div className={styles.inputWrapper}>
                <label htmlFor={`role_position`}>Role / Position</label>
                <input
                  type="text"
                  id={`role_position_${elementKey}`}
                  name={`role_position_${elementKey}`}
                  value={projectData.role_position}
                  onChange={e => handleUpdateObjInStateArray(e, stateKey)}
                />
              </div>
            </div>
            <div className={styles.cardRow}>
              <div className={styles.inputWrapper}>
                <label htmlFor={`start_date`}>Start Date</label>
                <input
                  type="text"
                  id={`start_date_${elementKey}`}
                  name={`start_date_${elementKey}`}
                  value={projectData.start_date}
                  onChange={e => handleUpdateObjInStateArray(e, stateKey)}
                />
              </div>
              <div className={styles.inputWrapper}>
                <label htmlFor={`end_date`}>End Date</label>
                <input
                  type="text"
                  id={`end_date_${elementKey}`}
                  name={`end_date_${elementKey}`}
                  value={projectData.end_date}
                  onChange={e => handleUpdateObjInStateArray(e, stateKey)}
                />
              </div>
            </div>
            {responsibilitiesArray}
            <div className={`${styles.cardRow} ${styles.addBtnWrapper}`}>
              <AddButton
                btnText={"+ Add A Responsibility"}
                stateKey={stateKey}
                arrayKey={arrayKey}
                statePropKey={statePropKey}
                onClickFunction={handleAddObjToNestedArray}
              ></AddButton>
            </div>
          </>
        }
      ></Card>
    )
  }
}

export default Project;