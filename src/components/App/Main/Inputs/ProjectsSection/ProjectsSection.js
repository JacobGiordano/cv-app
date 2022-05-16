import React, { Component } from 'react';
import uniqid from "uniqid";
import Project from './Project/Project';

class ProjectsSection extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    const stateKey = "projects";
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
      project: "",
      role_position: "",
      start_date: "",
      end_date: "",
      responsibilities: [
        {
          id: uniqid(),
          responsibility: ""
        }
      ]
    };
    let projectsArray = [];
    appState.projects.map((project, i) => {
      return projectsArray.push(<Project
        key={i}
        elementKey={i}
        projectData={project}
        handleChangeArrayObjInStateObjArray={handleChangeArrayObjInStateObjArray}
        handleUpdateObjInStateArray={handleUpdateObjInStateArray}
        handleAddObjToNestedArray={handleAddObjToNestedArray}
        handleRemoveObjFromNestedArray={handleRemoveObjFromNestedArray}
        handleRemoveObjFromStateArray={handleRemoveObjFromStateArray}
      ></Project>)
    })
    return (
      <>
        <h3>Projects</h3>
        {projectsArray}
        <button
          onClick={() => handleAddObjToStateArray(stateKey, newObj)}
        >
          + Add A Project
        </button>
      </>
    )
  }
}

export default ProjectsSection;