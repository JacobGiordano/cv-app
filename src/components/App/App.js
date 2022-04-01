import React, { Component } from "react";
import "../../components/App/App.css";
import Header from "../Header/Header";
import Inputs from "../Inputs/Inputs";
import Preview from "../Preview/Preview";
import uniqid from "uniqid";

class App extends Component {
  constructor(props){
    super(props)

    this.state ={
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      location: "",
      city: "",
      state_province: "",
      sites: [
        {
          id: uniqid(),
          site: ""
        }
      ],
      profile: "",
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
      ],
      project: [
        {
          id: uniqid(),
          project: "",
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
      ],
      skills: [
        {
          id: uniqid(),
          skill: ""
        }
      ],
      education: [
        {
          id: uniqid(),
          degree_certificate: "",
          area_of_study: "",
          school_institution: "",
          start_date: "",
          end_date: ""
        }
      ],
      certificates_associations: [
        {
          id: uniqid(),
          certificate_association: ""
        }
      ]
    }
  }
  render() {
    return (
    <>
      <Header></Header>
      <Inputs></Inputs>
      <Preview></Preview>
    </>)
  }
}

export default App;
