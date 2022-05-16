import React, { Component } from 'react';

class EducationPreview extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    const {objData} = this.props;
    return (
      <div className="education-preview">
        <span>{objData.degree_certificate}</span>
        <span>{objData.area_of_study}</span>
        <span>{objData.school_institution}</span>
        <span>{objData.start_date}</span>
        <span>{objData.end_date}</span>
      </div>
    )
  }
}

export default EducationPreview;