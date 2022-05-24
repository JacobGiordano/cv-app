import React, { Component } from 'react';
import styles from "./AddButton.module.css";

class AddButton extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    const {
      btnText,
      stateKey,
      arrayKey,
      statePropKey,
      newObj,
      onClickFunction
    } = this.props;
    let handleOnClick = null;
    newObj ? 
      handleOnClick = () => onClickFunction(stateKey, newObj):
      handleOnClick = (e) => onClickFunction(e, stateKey, arrayKey, statePropKey);
    return (
      <>
        <button
          className={styles.cardAddBtn}
          onClick={handleOnClick}
        >
          {btnText}
        </button>
      </>
    )
  }
}

export default AddButton