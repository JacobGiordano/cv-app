import React, { Component } from 'react';

class ProjectPreview extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    const {objData} = this.props;
    const projectResponsibilities = objData.responsibilities.map((obj, i) => <span key={i}>{obj.responsibility}</span>);
    return (
      <div className="projects-preview">
        <span>{objData.project}</span>
        <span>{objData.role_position}</span>
        <span>{objData.start_date}</span>
        <span>{objData.location}</span>
        <span>{objData.end_date}</span>
        { projectResponsibilities }
      </div>
    )
  }
}

export default ProjectPreview;