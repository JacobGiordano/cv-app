import React, { Component } from 'react';
import uniqid from "uniqid";

class Contact extends Component {
  constructor(props) {
    super(props)

    this.state = {
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
 
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }
  handleAddWebsite = () => {
    this.setState({websites: [...this.state.websites, {
      id: uniqid(),
      site: ""
    }]});
  }
  handleChangeWebsite = (e) => {
    const indexNum = parseInt(e.target.id.split("_")[1]);
    const newWebsitesArray = this.state.websites.map((site, i) => {
      return i === indexNum ? { id: site.id, site: e.target.value } : site
    });
    this.setState({websites: newWebsitesArray});
  }
  render() {
    let websitesArray = [];
    this.state.websites.map((website, i) => {
      let labelText = `Website #${i + 1}`;
      return websitesArray.push(
        <div key={i}>
          <label
            htmlFor={`website_${i}`}
          >{labelText}</label>
          <input
            type="text"
            id={`website_${i}`}
            onChange={e => this.handleChangeWebsite(e)}
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
            type="text" id={`first_name`}
            name="first_name"
            value={this.state.first_name}
            onChange={e => this.handleChange(e)}
          />
          <label htmlFor={`last_name`}>Last Name</label>
          <input 
            type="text" id={`last_name`}
            name="last_name"
            value={this.state.last_name}
            onChange={e => this.handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor={`phone`}>Phone Number</label>
          <input 
            type="tel" id={`phone`}
            name="phone"
            value={this.state.phone}
            onChange={e => this.handleChange(e)}
          />
          <label htmlFor={`email`}>Email</label>
          <input 
            type="email" id={`email`}
            name="email"
            value={this.state.email}
            onChange={e => this.handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor={`city`}>City</label>
          <input 
            type="text" id={`city`}
            name="city"
            value={this.state.city}
            onChange={e => this.handleChange(e)}
          />
          <label htmlFor={`state_province`}>State / Province</label>
          <input 
            type="text" id={`state_province`}
            name="state_province"
            value={this.state.state_province}
            onChange={e => this.handleChange(e)}
          />
        </div>
        <div>
          {websitesArray}
        </div>
        <button
          onClick={() => this.handleAddWebsite()}
        >
          + Add website
        </button>
      </>
    )
  }
}

export default Contact