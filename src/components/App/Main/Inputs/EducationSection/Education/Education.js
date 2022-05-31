import React, { Component } from 'react';
import Card from '../../Card/Card';
import styles from "../../Card/Card.module.css";
import { Trash2 } from 'react-feather';

class Education extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    const stateKey = "education";
    const {
      elementKey,
      educationData,
      handleRemoveObjFromStateArray,
      handleUpdateObjInStateArray,
    } = this.props;
    return (
      <Card
        id={`education_${elementKey}`}
        children={
          <>
            <div className={styles.cardTitle}>
              <h4>Education #{elementKey + 1}</h4>
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
                <label htmlFor={`degree_certificate`}>Degree or Certificate Obtained</label>
                <input
                  type="text"
                  id={`degree_certificate_${elementKey}`}
                  name={`degree_certificate_${elementKey}`}
                  value={educationData.degree_certificate}
                  onChange={e => handleUpdateObjInStateArray(e, stateKey)}
                />
              </div>
            </div>
            <div className={styles.cardRow}>
              <div className={styles.inputWrapper}>
                <label htmlFor={`area_of_study`}>Area of Study</label>
                <input
                  type="text"
                  id={`area_of_study_${elementKey}`}
                  name={`area_of_study_${elementKey}`}
                  value={educationData.area_of_study}
                  onChange={e => handleUpdateObjInStateArray(e, stateKey)}
                />
              </div>
            </div>
            <div className={styles.cardRow}>
              <div className={styles.inputWrapper}>
                <label htmlFor={`school_institution`}>School or Institution</label>
                <input
                  type="text"
                  id={`school_institution_${elementKey}`}
                  name={`school_institution_${elementKey}`}
                  value={educationData.school_institution}
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
                  value={educationData.start_date}
                  onChange={e => handleUpdateObjInStateArray(e, stateKey)}
                />
              </div>
              <div className={styles.inputWrapper}>  
                <label htmlFor={`end_date`}>End Date</label>
                <input
                  type="text"
                  id={`end_date_${elementKey}`}
                  name={`end_date_${elementKey}`}
                  value={educationData.end_date}
                  onChange={e => handleUpdateObjInStateArray(e, stateKey)}
                />
              </div>
            </div>
          </>
        }
      ></Card>
    )
  }
}

export default Education;