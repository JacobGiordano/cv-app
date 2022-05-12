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
  handleAddObjToObjArray = (e, stateKey, stateArrayKey, statePropKey) => {
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
  handleRemoveObjFromObjArray = (e, stateKey, stateArrayKey) => {
    const splitId = e.target.id.split("_");
    const indexNum = parseInt(splitId[splitId.length - 1]);
    this.setState(prevState => ({
      [stateKey]: {
        ...prevState[stateKey],
        [stateArrayKey]: prevState[stateKey][stateArrayKey].filter((obj, i) => i !== indexNum ? obj : null)
      }
    }));
  }
  handleChangeObjInObjArray = (e, stateKey, stateArrayKey, statePropKey) => {
    const splitId = e.target.id.split("_");
    const indexNum = parseInt(splitId[splitId.length - 1]);
    this.setState(prevState => ({
      [stateKey]: {
        ...prevState[stateKey],
        [stateArrayKey]: prevState[stateKey][stateArrayKey].map((obj, i) => {
          return i === indexNum ? { ...obj, [statePropKey]: e.target.value } : obj;
        })
      }
    }));
  }
  handleAddObjToStateArray = (stateKey, newObj) => {
    this.setState(prevState => ({
      [stateKey]: [...prevState[stateKey], newObj]
    }));
  }
  handleRemoveObjFromStateArray = (e, stateKey) => {
    const splitId = e.target.id.split("_");
    const indexNum = parseInt(splitId[splitId.length - 1]);
    this.setState(prevState => ({
      [stateKey]: prevState[stateKey].filter((obj, i) => i !== indexNum ? obj : null)
    }));
  }
  handleUpdateObjInStateArray = (e, stateKey) => {
    const splitId = e.target.id.split("_");
    const indexNum = parseInt(splitId[splitId.length - 1]);
    const statePropKey = splitId.slice(0, splitId.length - 1).join("_");
    this.setState(prevState => ({
      [stateKey]: prevState[stateKey].map((obj, i) => {
        return i === indexNum ? { ...prevState[stateKey][i], [statePropKey]: e.target.value } : obj;
      })
    }));
  }
  handleAddObjToNestedArray = (e, stateKey, stateArrayKey, statePropKey) => {
    const splitId = e.target.closest(".card").id.split("_");
    const indexNum = parseInt(splitId[splitId.length - 1]);
    this.setState(prevState => ({
      [stateKey]: prevState[stateKey].map((obj, i) => {
        return i === indexNum ? {
            ...prevState[stateKey][i],
            [stateArrayKey]: [
              ...prevState[stateKey][i][stateArrayKey],
              {
                id: uniqid(),
                [statePropKey]: ""
              }
            ]
          } : obj
      })
    }));
  }
  handleChangeArrayObjInStateObjArray = (e, stateKey, stateArrayKey) => {
    const splitParentId = e.target.closest(".card").id.split("_");
    const parentIndex = parseInt(splitParentId[splitParentId.length - 1]);
    const splitId = e.target.id.split("_");
    const indexNum = parseInt(splitId[splitId.length - 1]);
    const statePropKey = splitId.slice(0, splitId.length - 1).join("_");
    this.setState(prevState => ({
      [stateKey]: prevState[stateKey].map((nestedObj, i) => {
        return i === parentIndex ? {
          ...prevState[stateKey][parentIndex],
          [stateArrayKey]: 
            prevState[stateKey][parentIndex][stateArrayKey].map((nestedObj, i) => {
              return i === indexNum ? {id: nestedObj.id, [statePropKey]: e.target.value} : nestedObj;
            })
        } : nestedObj;
      })
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
          handleRemoveObjFromObjArray={this.handleRemoveObjFromObjArray}
          handleAddObjToNestedArray={this.handleAddObjToNestedArray}
          handleChangeArrayObjInStateObjArray={this.handleChangeArrayObjInStateObjArray}
          handleChangeObjInObjArray={this.handleChangeObjInObjArray}
          handleAddObjToStateArray={this.handleAddObjToStateArray}
          handleRemoveObjFromStateArray={this.handleRemoveObjFromStateArray}
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