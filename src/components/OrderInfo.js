import React, { useState } from 'react';
import FormStyle from './FormStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

function OrderInfo() {
  const [contact, setContact] = useState('01102004034');
  const [shipTo, setShipTo] = useState('Accra,Ghana');
  const [paymentMethod, setPaymentMethod] = useState('Master card');
  const [editingContact, setEditingContact] = useState(false);
  const [editingShipTo, setEditingShipTo] = useState(false);
  const [editingPaymentMethod, setEditingPaymentMethod] = useState(false);
  const [focusContact, setFocusContact] = useState(false);
  const [focusShipTo, setFocusShipTo] = useState(false);
  const [focusPaymentMethod, setFocusPaymentMethod] = useState(false);

  const handleEditContact = () => {
    setEditingContact(true);
    setFocusContact(true);
  };

  const handleEditShipTo = () => {
    setEditingShipTo(true);
    setFocusShipTo(true);
  };

  const handleEditPaymentMethod = () => {
    setEditingPaymentMethod(true);
    setFocusPaymentMethod(true);
  };

  const handleInputChange = (event, setter) => {
    setter(event.target.value);
  };

  return (
    <div>
      <div className='form-container'>
        <div className='formInput'>
          <div className='form-header'>
            <h2 className='form-title'>Order: #323232</h2>
            <h2 className='form-title'>23/4/2023</h2>
          </div>
          <div className='form-details flex flex-col'>
            <label>Contact</label>
            {editingContact ? (
              <input
                value={contact}
                onChange={(e) => handleInputChange(e, setContact)}
                onBlur={() => setEditingContact(false)}
                className='inputs'
                ref={focusContact ? (inputRef) => inputRef && inputRef.focus() : null}
              />
            ) : (
              <div onClick={handleEditContact} className='editable-text input-container'>
                <span className='input-content'>{contact}</span>
                <span className='edit-text'>Change</span>
              </div>
            )}
          </div>
          <div className='form-details flex flex-col'>
            <label>Ship to</label>
            {editingShipTo ? (
              <input
                value={shipTo}
                onChange={(e) => handleInputChange(e, setShipTo)}
                onBlur={() => setEditingShipTo(false)}
                className='inputs'
                ref={focusShipTo ? (inputRef) => inputRef && inputRef.focus() : null}
              />
            ) : (
              <div onClick={handleEditShipTo} className='editable-text input-container'>
                <span className='input-content'>{shipTo}</span>
                <span className='edit-text'>Change</span>
              </div>
            )}
          </div>
          <div className='form-details flex flex-col'>
            <label>Payment method</label>
            {editingPaymentMethod ? (
              <input
                value={paymentMethod}
                onChange={(e) => handleInputChange(e, setPaymentMethod)}
                onBlur={() => setEditingPaymentMethod(false)}
                className='inputs'
                ref={focusPaymentMethod ? (inputRef) => inputRef && inputRef.focus() : null}
              />
            ) : (
              <div onClick={handleEditPaymentMethod} className='editable-text input-container'>
                <span className='input-content'>{paymentMethod}</span>
                <span className='edit-text'>Change</span>
              </div>
            )}
          </div>
        </div>
        <div className='form-links'>
          <div className='return-to-cart '>
            <FontAwesomeIcon icon={faAngleLeft} className='return-angle' />
            <h2>Return to Payment</h2>
          </div>
          <button className='next-btn'>
            Pay now <FontAwesomeIcon icon={faAnglesRight} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderInfo;
