import React from 'react';
import './contacts.scss';

const Contacts = () => (
  <div className="contact" id="contacts">
    <div className="left">
      <img src="/shake.svg" alt="" />
    </div>
    <div className="right">
      <h2>Contact.</h2>
      <form>
        <input type="text" placeholder='Email' />
        <textarea placeholder='Message' />
        <button type='submit'>Send</button>
      </form>
    </div>
  </div>
);

export default Contacts;
