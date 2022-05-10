import React, { Component } from 'react';

class WorkExperiencePreview extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    const {objData} = this.props;
    const workExperienceResponsibilities = objData.responsibilities.map((obj, i) => <span key={i}>{obj.responsibility}</span>);
    return (
      <div className="work-experience-preview">
        <span>{objData.company}</span>
        <span>{objData.role_position}</span>
        <span>{objData.location}</span>
        <span>{objData.start_date}</span>
        <span>{objData.location}</span>
        <span>{objData.end_date}</span>
        { workExperienceResponsibilities }
      </div>
    )
  }
}

export default WorkExperiencePreview;