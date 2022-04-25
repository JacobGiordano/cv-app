import React, { Component } from 'react';
import Inputs from "../Inputs/Inputs";
import Preview from "../Preview/Preview";
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
  handleAddArrayObj = (stateKey, stateArrayKey, statePropKey) => {
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
  handleChangeArrayObj = (e, stateKey, stateArrayKey, statePropKey) => {
    const indexNum = parseInt(e.target.id.split("_")[1]);
    this.setState(prevState => ({
      [stateKey]: {
        ...prevState[stateKey],
        websites: prevState[stateKey][stateArrayKey].map((obj, i) => {
          return i === indexNum ? { id: obj.id, [statePropKey]: e.target.value } : obj;
        })
      }
    }))
  }
  render() {
    return (
      <>
        <Inputs
          appState={this.state}
          handleChange={this.handleChange}
          handleAddArrayObj={this.handleAddArrayObj}
          handleChangeArrayObj={this.handleChangeArrayObj}
        ></Inputs>
        <Preview
          appState={this.state}
        ></Preview>
      </>
    );
  }
}

export default Main;