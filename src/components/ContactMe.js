import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Email from './Email';
import { ModalContext } from '../contexts/ModalContext';

// Style
const ModalDiv = styled.div`
  background: rgb(42, 42, 46);
  position: fixed;
  right: 0;
  top: 70px;
  height: 80px;
  width: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgb(42, 42, 46);
  border-radius: 25px;
  color: white;
  opacity: 1;
  z-index: 250;
  margin-right: 7%;
`;
const Icon = styled.i`
  width: 40px;
  cursor: pointer;
`;

const ContactMe = props => {
  const [modal, setModal] = useContext(ModalContext);

  const emailButton = () => {
    setModal({
      contact: true,
      email: true,
    });
  };
  const renderEmail = () => {
    if (modal.email) {
      return (
        <div>
          <Email />
        </div>
      );
    }

    return null;
  };

  return ReactDOM.createPortal(
    <ModalDiv>
      {/* Figure out sending email*/}
      <Icon className="big envelope outline icon" onClick={emailButton} />
      {renderEmail()}
      <Icon
        className="big github icon"
        onClick={() => window.open('https://github.com/bhgs89')}
      />
      <Icon
        className="big linkedin icon"
        onClick={() => window.open('https://www.linkedin.com/in/baekhan')}
      />
    </ModalDiv>,
    document.querySelector('#contact'),
  );
};

export default ContactMe;
