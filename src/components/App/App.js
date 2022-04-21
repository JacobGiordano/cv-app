import React, { Component } from "react";
import "../../components/App/App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";

class App extends Component {
  constructor(props){
    super(props)

    this.state = {

    }
  }
  render() {
    return (
      <>
        <Header></Header>
        <Main></Main>
      </>
    )
  }
}

export default App;
