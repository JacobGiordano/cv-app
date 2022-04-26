import React, { Component } from 'react';

class ContactPreview extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    const {appState} = this.props;
    const contactWebsites = appState.contact.websites.map((website, i) => <span key={i}>{website.site}</span>);
    return (
      <div className="contact-preview">
        <span>{appState.contact.first_name}</span>
        <span>{appState.contact.last_name}</span>
        <span>{appState.contact.phone}</span>
        <span>{appState.contact.email}</span>
        <span>{appState.contact.location}</span>
        <span>{appState.contact.city}</span>
        <span>{appState.contact.state_province}</span>
        { contactWebsites }
      </div>
    )
  }
}

export default ContactPreview;