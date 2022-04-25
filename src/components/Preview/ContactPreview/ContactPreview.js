import React, { Component } from 'react';

class ContactPreview extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    const {appState} = this.props;
    return (
      <div className="contact-preview">
        {appState.contact.first_name}
      </div>
    )
  }
}

export default ContactPreview;