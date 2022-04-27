import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    const stateKey = "contact";
    const arrayKey = "websites";
    const propertyKey = "site";
    const {appState, handleChange, handleAddArrayObj, handleChangeArrayObj} = this.props;
    let websitesArray = [];
    appState.contact.websites.map((website, i) => {
      let labelText = `Website #${i + 1}`;
      return websitesArray.push(
        <div key={i}>
          <label
            htmlFor={`site_${i}`}
          >{labelText}</label>
          <input
            type="text"
            id={`site_${i}`}
            onChange={e => handleChangeArrayObj(e, stateKey, arrayKey, propertyKey)}
            value={website.site}
          />
        </div>
      )
    })
    return (
      <>
        <h3>Contact</h3>
        <div>
          <label htmlFor={`first_name`}>First Name</label>
          <input 
            type="text"
            id="first_name"
            name="first_name"
            value={appState.contact.first_name}
            onChange={e => handleChange(e, stateKey)}
          />
          <label htmlFor={`last_name`}>Last Name</label>
          <input 
            type="text"
            id="last_name"
            name="last_name"
            value={appState.contact.last_name}
            onChange={e => handleChange(e, stateKey)}
          />
        </div>
        <div>
          <label htmlFor={`phone`}>Phone Number</label>
          <input 
            type="tel"
            id="phone"
            name="phone"
            value={appState.contact.phone}
            onChange={e => handleChange(e, stateKey)}
          />
          <label htmlFor={`email`}>Email</label>
          <input 
            type="email"
            id="email"
            name="email"
            value={appState.contact.email}
            onChange={e => handleChange(e, stateKey)}
          />
        </div>
        <div>
          <label htmlFor={`city`}>City</label>
          <input 
            type="text"
            id="city"
            name="city"
            value={appState.contact.city}
            onChange={e => handleChange(e, stateKey)}
          />
          <label htmlFor={`state_province`}>State / Province</label>
          <input 
            type="text"
            id="state_province"
            name="state_province"
            value={appState.contact.state_province}
            onChange={e => handleChange(e, stateKey)}
          />
        </div>
        <div>
          {websitesArray}
        </div>
        <button
          onClick={() => handleAddArrayObj(stateKey, arrayKey, propertyKey)}
        >
          + Add website
        </button>
      </>
    )
  }
}

export default Contact;