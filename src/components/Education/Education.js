import React, { Component } from 'react';
import uniqid from "uniqid";

class Education extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: uniqid(),
      degree_certificate: "",
      area_of_study: "",
      school_institution: "",
      start_date: "",
      end_date: ""
    }
  }
  render() {
    const sectionId = uniqid();
    return (
      <>
        <h3>Education</h3>
        <label htmlFor={`degree_certificate_${sectionId}`}>Degree or Certificate Obtained</label>
        <input type="text" id={`degree_certificate_${sectionId}`} />
        <label htmlFor={`area_of_study_${sectionId}`}>Area of Study</label>
        <input type="text" id={`area_of_study_${sectionId}`} />
        <label htmlFor={`school_institution${sectionId}`}>School or Institution</label>
        <input type="text" id={`school_institution${sectionId}`} />
        <div>
          <label htmlFor={`start_date_${sectionId}`}>Start Date</label>
          <input type="text" id={`start_date_${sectionId}`} />
          <label htmlFor={`end_date_${sectionId}`}>End Date</label>
          <input type="text" id={`end_date_${sectionId}`} />
        </div>
      </>
    )
  }
}

export default Education;