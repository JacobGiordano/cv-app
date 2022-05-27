import React, { Component } from 'react';
import styles from "../AddCardBtn/AddCardBtn.module.css";

class AddCardBtn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }
  render() {
    const {
      btnText,
      handleAddObjToStateArray,
      stateKey,
      newObj} = this.props;
    return (
      <div
        className={styles.addCardBtnWrapper}
      >
        <button
          className={styles.addCardBtn}
          onClick={() => handleAddObjToStateArray(stateKey, newObj)}
        >
          {btnText}
        </button>
      </div>
    )
  }
}

export default AddCardBtn;