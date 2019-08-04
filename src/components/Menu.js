import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ContactMe from './ContactMe';
import styled from 'styled-components';
import './Menu.css';
import { ModalContext } from '../contexts/ModalContext';
import { ButtonContext } from '../contexts/ButtonContext';

// Style
const MenuContainer = styled.div`
  position: relative;
  background-color: #1b1c1d;
  height: 60px;
`;
const ContactButton = styled.button`
  background-color: ${props => (props.modal ? 'white' : '#1b1c1d')};
  color: ${props => (props.modal ? '#1b1c1d' : 'white')};
  border: 2px solid white;
  border-radius: 5px
  height: 35px;
  margin-top: 10px;
  font-family: 'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif;
  font-weight: bold;
  :hover {
    background-color: ${props => (props.modal ? '#1b1c1d' : 'white')};
    color: ${props => (props.modal ? 'white' : '#1b1c1d')};
    cursor: pointer;
  }
  :active {
    transform: translateY(4px);
  }
`;
// const MenuBar = styled.div`
//   background-color: #1b1c1d;
//   margin-top: 0px;
//   margin-left: 225px;
//   margin-right: 225px;
//   border-width: 2px;
//   height: 50px;
//   position: fixed;
//   display: flex;
//   flex-direction: row;
//   z-index: 50;
//   width: 80%;
// `;

const Menu = props => {
  const [modal, setModal] = useContext(ModalContext);
  const [button, setButton] = useContext(ButtonContext);

  const onClickHome = e => {
    const home = {
      bt1: 'active item',
      bt2: 'item',
      bt3: 'item',
    };
    setButton(home);
    setModal({
      contact: false,
      email: false,
    });
  };

  const onClickAboutMe = e => {
    const about = {
      bt1: 'item',
      bt2: 'active item',
      bt3: 'item',
    };
    setButton(about);
    setModal({
      contact: false,
      email: false,
    });
  };

  const onClickCareer = e => {
    const career = {
      bt1: 'item',
      bt2: 'item',
      bt3: 'active item',
    };
    setButton(career);
    setModal({
      contact: false,
      email: false,
    });
  };

  const contactButton = e => {
    if (!modal.contact) {
      setModal({
        contact: true,
        email: false,
      });
    } else {
      setModal({
        contact: false,
        email: false,
      });
    }
  };

  const renderContact = () => {
    if (modal.contact) {
      return (
        <div>
          <ContactMe />
        </div>
      );
    }
    return null;
  };

  const closeContact = () => {
    setModal({
      contact: false,
      email: false,
    });
  };

  return (
    <MenuContainer onClick={closeContact}>
      <div className="ui secondary pointing menu">
        <Link to="/" className={button.bt1} onClick={onClickHome}>
          Home
        </Link>
        <Link to="/aboutme" className={button.bt2} onClick={onClickAboutMe}>
          About Me
        </Link>
        <Link to="/career" className={button.bt3} onClick={onClickCareer}>
          Careers
        </Link>
        <div className="right menu" onClick={e => e.stopPropagation()}>
          <ContactButton onClick={contactButton}>Contact Me</ContactButton>
          {renderContact()}
        </div>
      </div>
    </MenuContainer>
  );
};

export default Menu;
