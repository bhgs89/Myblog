import React from 'react';
import ReactDOM from 'react-dom';
import './ContactMe.css';

const ContactMe = props => {
  return ReactDOM.createPortal(
    <div>
      <div className="modal_ui">
        {/* Figure out sending email*/}
        <i class="big envelope outline icon" />
        <i
          class="big github icon"
          onClick={() => window.open('https://github.com/bhgs89')}
        />
        <i
          class="big linkedin icon"
          onClick={() => window.open('https://www.linkedin.com/in/baekhan')}
        />
      </div>
    </div>,
    document.querySelector('#contact'),
  );
};

export default ContactMe;
