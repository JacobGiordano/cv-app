import React, { Component } from "react";
import Contact from "../Contact/Contact";
import Profile from "../Profile/Profile";
import WorkExperience from "../WorkExperience/WorkExperience";

class Inputs extends Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }
  render() {
    return (
      <div className="inputs">
        <div>Inputs</div>
        <Profile></Profile>
        <Contact></Contact>
        <WorkExperience></WorkExperience>
      </div>
    )
  }
}

export default Inputs;