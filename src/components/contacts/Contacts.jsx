import React, { useState } from 'react';
import './contacts.scss';

const Contacts = () => {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contacts">
      <div className="left">
        <img src="/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message" />
          <button type="submit">Send</button>
        </form>
        {message && <span>Thanks, I will reply ASAP :)</span>}
      </div>
    </div>
  );
};

export default Contacts;
