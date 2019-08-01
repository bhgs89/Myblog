import React from 'react';
import ReactDOM from 'react-dom';
import './ContactMe.css';

const ContactMe = props => {
  return ReactDOM.createPortal(
    <div>
      <div className="modal_ui">
        <i class="envelope outline icon" />
        <i class="github icon" />
        <i class="linkedin icon" />
      </div>
    </div>,
    document.querySelector('#contact'),
  );
};

export default ContactMe;
