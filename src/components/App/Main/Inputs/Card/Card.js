import React, { Component } from 'react';
import styles from "./Card.module.css";

class Card extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render() {
    const {children} = this.props;
    return (
      <div className={styles.card}>
        {children}
      </div>
    )
  }
}

export default Card;