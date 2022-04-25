import React, { Component } from "react"
import "../Preview/Preview.css";
import ContactPreview from "./ContactPreview/ContactPreview";

class Preview extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    const {appState} = this.props;
    return (
      <div className="preview">
        <div>Preview</div>
        <ContactPreview 
          appState={appState}
        ></ContactPreview>
      </div>
    );
  }
}

export default Preview;