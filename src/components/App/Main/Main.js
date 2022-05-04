import React, { Component } from 'react';
import "./Main.css"
import Inputs from "./Inputs/Inputs";
import Preview from "./Preview/Preview";
import uniqid from "uniqid";

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      contact: {
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        location: "",
        city: "",
        state_province: "",
        websites: [
          {
            id: uniqid(),
            site: ""
          }
        ],
      },
      profile: {
        profile: ""
      },
      work_experience: [
        {
          id: uniqid(),
          company: "",
          role_position: "",
          location: "",
          start_date: "",
          end_date: "",
          responsibilities: [
            {
              id: uniqid(),
              responsibility: ""
            }
          ]
        }
      ]
    }
  }
  handleChange = (e, stateKey) => {
    this.setState(prevState => ({
      [stateKey]: {
        ...prevState[stateKey],
        [e.target.name]: e.target.value
      }
    }));
  }
  handleAddObjToStateArray = (stateKey, newObj) => {
    this.setState(prevState => ({
      [stateKey]: [...prevState[stateKey], newObj]
    }));
  }
  handleUpdateObjInStateArray = (e, stateKey) => {
    const splitId = e.target.id.split("_");
    const indexNum = parseInt(splitId[splitId.length - 1]);
    const statePropKey = splitId.slice(0, splitId.length - 1).join("_");
    console.log(splitId)
    console.table(indexNum, statePropKey)
    this.setState(prevState => ({
      [stateKey]: prevState[stateKey].map((obj, i) => {
        return i === indexNum ? { ...prevState[stateKey][i], [statePropKey]: e.target.value } : obj;
      })
    }));
  }
  handleAddObjToObjArray = (stateKey, stateArrayKey, statePropKey) => {
    this.setState(prevState => ({
      [stateKey]: {
        ...prevState[stateKey],
        [stateArrayKey]: [
          ...prevState[stateKey][stateArrayKey],
          {
            id: uniqid(),
            [statePropKey]: ""
          }
        ]
      }
    }));
  }
  handleChangeObjInObjArray = (e, stateKey, stateArrayKey, statePropKey) => {
    const indexNum = parseInt(e.target.id.split("_")[1]);
    this.setState(prevState => ({
      [stateKey]: {
        ...prevState[stateKey],
        [stateArrayKey]: prevState[stateKey][stateArrayKey].map((obj, i) => {
          return i === indexNum ? { ...prevState[obj], [statePropKey]: e.target.value } : obj;
        })
      }
    }));
  }
  render() {
    return (
      <div className="main">
        <Inputs
          className="inputs"
          appState={this.state}
          handleChange={this.handleChange}
          handleAddObjToObjArray={this.handleAddObjToObjArray}
          handleChangeObjInObjArray={this.handleChangeObjInObjArray}
          handleAddObjToStateArray={this.handleAddObjToStateArray}
          handleUpdateObjInStateArray={this.handleUpdateObjInStateArray}
        ></Inputs>
        <Preview
          className="preview"
          appState={this.state}
        ></Preview>
      </div>
    );
  }
}

export default Main;