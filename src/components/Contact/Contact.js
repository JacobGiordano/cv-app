import React, { Component } from 'react';
import uniqid from "uniqid";

class Contact extends Component {
  constructor(props) {
    super(props)

    this.state ={
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
    }
  }
  render() {
    const sectionId = uniqid();
    let websitesArray = [];
    this.state.websites.map((website, i) => {
      let labelText = `Website #${i + 1}`;
      return websitesArray.push(
        <div key={uniqid()}>
          <label
            htmlFor={`website_${sectionId}_${i}`}
          >{labelText}</label>
          <input
            type="text"
            id={`website_${sectionId}_${i}`}
            // value={website.site}
          />
        </div>
      )
    })
    return (
      <>
        <h3>Contact</h3>
        <div>
          <label htmlFor={`first_name_${sectionId}`}>First Name</label>
          <input type="text" id={`first_name_${sectionId}`} />
          <label htmlFor={`last_name_${sectionId}`}>Last Name</label>
          <input type="text" id={`last_name_${sectionId}`} />
        </div>
        <div>
          <label htmlFor={`phone_${sectionId}`}>Phone Number</label>
          <input type="tel" id={`phone_${sectionId}`} />
          <label htmlFor={`email_${sectionId}`}>Email</label>
          <input type="email" id={`email_${sectionId}`} />
        </div>
        <div>
          <label htmlFor={`city_${sectionId}`}>City</label>
          <input type="text" id={`city_${sectionId}`} />
          <label htmlFor={`state_province${sectionId}`}>State / Province</label>
          <input type="text" id={`state_province${sectionId}`} />
        </div>
        <div>
          {websitesArray}
        </div>
      </>
    )
  }
}

export default Contact