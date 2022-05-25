import React, { Component } from 'react';
import styles from "./Card.module.css";

class Card extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render() {
    const {children, id} = this.props;
    return (
      <div
        className={`card ${styles.card}`}
        id={id}>
        {children}
      </div>
    )
  }
}

export default Card;