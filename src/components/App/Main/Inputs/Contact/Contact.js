import React, { Component } from 'react';
import AddButton from '../Card/AddButton/AddButton';
import Card from '../Card/Card';
import styles from "../Card/Card.module.css";
import { Trash2 } from 'react-feather';

class Contact extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    const stateKey = "contact";
    const arrayKey = "websites";
    const statePropKey = "site";
    const {
      appState,
      handleChange,
      handleAddObjToObjArray,
      handleRemoveObjFromObjArray,
      handleChangeObjInObjArray
    } = this.props;
    let websitesArray = [];
    appState.contact.websites.map((website, i) => {
      let labelText = `Website #${i + 1}`;
      return websitesArray.push(
        <div 
          key={i}
          className={styles.cardRow}
        >
          <div className={styles.inputWrapper}>
            <label
              htmlFor={`site_${i}`}
            >{labelText}</label>
            <div className={styles.inputWrapperInnerWrapper}>
              <input
                type="text"
                id={`site_${i}`}
                onChange={e => handleChangeObjInObjArray(e, stateKey, arrayKey, statePropKey)}
                value={website.site}
              />
              <button
                id={`site_delete_btn_${i}`}
                title="Delete"
                onClick={e => handleRemoveObjFromObjArray(e, stateKey, arrayKey)}
              >
                <Trash2
                  size={16}
                ></Trash2>
              </button>
            </div>
          </div>
        </div>
      )
    })
    return (
      <>
        <h3>Contact</h3>
        <Card 
          children={
            <>
              <div className={styles.cardRow}>
                <div className={styles.inputWrapper}>
                  <label htmlFor={`first_name`}>First Name</label>
                  <input 
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={appState.contact.first_name}
                    onChange={e => handleChange(e, stateKey)}
                  />
                </div>
                <div className={styles.inputWrapper}>
                  <label htmlFor={`last_name`}>Last Name</label>
                  <input 
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={appState.contact.last_name}
                    onChange={e => handleChange(e, stateKey)}
                  />
                </div>
              </div>
              <div className={styles.cardRow}>
                <div className={styles.inputWrapper}>                
                  <label htmlFor={`phone`}>Phone Number</label>
                  <input 
                    type="tel"
                    id="phone"
                    name="phone"
                    value={appState.contact.phone}
                    onChange={e => handleChange(e, stateKey)}
                  />
                </div>
                <div className={styles.inputWrapper}>                  
                  <label htmlFor={`email`}>Email</label>
                  <input 
                    type="email"
                    id="email"
                    name="email"
                    value={appState.contact.email}
                    onChange={e => handleChange(e, stateKey)}
                  />
                </div>
              </div>
              <div className={styles.cardRow}>
                <div className={styles.inputWrapper}>                  
                  <label htmlFor={`city`}>City</label>
                  <input 
                    type="text"
                    id="city"
                    name="city"
                    value={appState.contact.city}
                    onChange={e => handleChange(e, stateKey)}
                  />
                </div>
                <div className={styles.inputWrapper}>
                  <label htmlFor={`state_province`}>State / Province</label>
                  <input 
                    type="text"
                    id="state_province"
                    name="state_province"
                    value={appState.contact.state_province}
                    onChange={e => handleChange(e, stateKey)}
                  />
                </div>
              </div>
              {websitesArray}
              <div className={`${styles.cardRow} ${styles.addBtnWrapper}`}>
                <AddButton
                  btnText={"+ Add website"}
                  stateKey={stateKey}
                  arrayKey={arrayKey}
                  statePropKey={statePropKey}
                  onClickFunction={handleAddObjToObjArray}
                ></AddButton>
              </div>
            </>  
          }
        ></Card>    
      </>
    )
  }
}

export default Contact;