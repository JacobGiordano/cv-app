import React, { Component } from 'react';

class SkillsPreview extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    const {objData} = this.props;
    return (
      <>
        <div className="skills-preview">
          <span>{objData.skill}</span>
        </div>
      </>
    );
  }
}

export default SkillsPreview;