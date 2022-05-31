import React, { Component } from 'react';
import uniqid from "uniqid";
import AddCardBtn from '../AddCardBtn/AddCardBtn';
import Education from './Education/Education';

class EducationSection extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    const stateKey = "education";
    const {
      appState,
      handleChangeArrayObjInStateObjArray,
      handleAddObjToStateArray,
      handleRemoveObjFromStateArray,
      handleUpdateObjInStateArray,
      handleAddObjToNestedArray,
      handleRemoveObjFromNestedArray
    } = this.props;
    const newObj = {
      id: uniqid(),
      degree_certificate: "",
      area_of_study: "",
      school_institution: "",
      start_date: "",
      end_date: ""
    };
    let educationArray = [];
    appState.education.map((education, i) => {
      return educationArray.push(<Education
        key={i}
        elementKey={i}
        educationData={education}
        handleChangeArrayObjInStateObjArray={handleChangeArrayObjInStateObjArray}
        handleUpdateObjInStateArray={handleUpdateObjInStateArray}
        handleAddObjToNestedArray={handleAddObjToNestedArray}
        handleRemoveObjFromNestedArray={handleRemoveObjFromNestedArray}
        handleRemoveObjFromStateArray={handleRemoveObjFromStateArray}
      ></Education>)
    })
    return (
      <>
        <h3>Education</h3>
        {educationArray}
        <AddCardBtn
          btnText="+ Add Education"
          handleAddObjToStateArray={handleAddObjToStateArray}
          stateKey={stateKey}
          newObj={newObj}
        ></AddCardBtn>
      </>
    )
  }
}

export default EducationSection;