import React, { Component } from 'react';

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
      <div className="card" id={`education_${elementKey}`}>
        <div className="card-title">
          <h4>Education #{elementKey + 1}</h4>
          <button 
            id={`remove_card_btn_${elementKey}`}
            className="remove-card-btn"
            onClick={e => handleRemoveObjFromStateArray(e, stateKey)}
          >&times;</button>
        </div>
        <label htmlFor={`degree_certificate`}>Degree or Certificate Obtained</label>
        <input
          type="text"
          id={`degree_certificate_${elementKey}`}
          name={`degree_certificate_${elementKey}`}
          value={educationData.degree_certificate}
          onChange={e => handleUpdateObjInStateArray(e, stateKey)}
        />
        <label htmlFor={`area_of_study`}>Area of Study</label>
        <input
          type="text"
          id={`area_of_study_${elementKey}`}
          name={`area_of_study_${elementKey}`}
          value={educationData.area_of_study}
          onChange={e => handleUpdateObjInStateArray(e, stateKey)}
        />
        <label htmlFor={`school_institution`}>School or Institution</label>
        <input
          type="text"
          id={`school_institution_${elementKey}`}
          name={`school_institution_${elementKey}`}
          value={educationData.school_institution}
          onChange={e => handleUpdateObjInStateArray(e, stateKey)}
        />
        <div>
          <label htmlFor={`start_date`}>Start Date</label>
          <input
            type="text"
            id={`start_date_${elementKey}`}
            name={`start_date_${elementKey}`}
            value={educationData.start_date}
            onChange={e => handleUpdateObjInStateArray(e, stateKey)}
          />
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
    )
  }
}

export default Education;