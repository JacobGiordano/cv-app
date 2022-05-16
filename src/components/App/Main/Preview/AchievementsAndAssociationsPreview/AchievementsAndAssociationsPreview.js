import React, { Component } from 'react';

class AchievementsAndAssociationsPreview extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    const {objData} = this.props;
    return (
      <>
        {objData.achievement_association.trim() !== "" && <div className="achievement-association-preview">
          <span>{objData.achievement_association}</span>
        </div>}
      </>
    );
  }
}

export default AchievementsAndAssociationsPreview;