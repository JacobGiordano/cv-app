import React, { Component } from "react";
import "../../components/App/App.css";
import Header from "../Header/Header";
import Inputs from "../Inputs/Inputs";
import Preview from "../Preview/Preview";

class App extends Component {
  constructor(props){
    super(props)

    this.state ={

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
