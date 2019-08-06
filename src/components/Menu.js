import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ContactMe from './ContactMe';
import styled from 'styled-components';
import { ModalContext } from '../contexts/ModalContext';
import { ButtonContext } from '../contexts/ButtonContext';

// Style
const MenuContainer = styled.div`
  position: relative;
  background-color: #1b1c1d;
  height: 60px;
`;
const MenuBar = styled.div`
  &.ui.secondary.pointing.menu {
    background-color: #1b1c1d;
    margin-top: 5px;
    margin-left: 225px;
    margin-right: 225px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    border-width: 2px;
    border-radius: 10px;
    height: 50px;
    position: fixed;
    display: flex;
    flex-direction: row;
    z-index: 50;
    width: 80%;
  }
`;
const MenuButton = styled(Link)`
  &&&&&& {
    color: ${props => (props.className === 'item' ? 'grey' : 'white')};
    border-color: ${props => (props.className === 'item' ? null : 'white')};
    :hover {
      border-color: ${props => (props.className === 'item' ? null : 'white')};
      color: ${props => (props.className === 'item' ? 'white' : 'white')};
    }
  }
`;
const RightMenu = styled.div`
  position: fixed;
  right: 9%;

  @media only screen and (max-width: 700px) {
    visibility: hidden;
  }
`;
const ContactButton = styled.button`
  background-color: ${props => (props.modal ? 'white' : '#1b1c1d')};
  color: ${props => (props.modal ? '#1b1c1d' : 'white')};
  border: 2px solid white;
  border-radius: 5px
  height: 35px;
  margin-top: 8px;
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
// Style End

const Menu = () => {
  const [modal, setModal] = useContext(ModalContext);
  const [button] = useContext(ButtonContext);

  const onClickHome = e => {
    setModal({
      contact: false,
      email: false,
    });
  };

  const onClickAboutMe = e => {
    setModal({
      contact: false,
      email: false,
    });
  };

  const onClickCareer = e => {
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
      <MenuBar className="ui secondary pointing menu">
        <MenuButton to="/" className={button.bt1} onClick={onClickHome}>
          Home
        </MenuButton>
        <MenuButton
          to="/aboutme"
          className={button.bt2}
          onClick={onClickAboutMe}
        >
          About Me
        </MenuButton>
        <MenuButton to="/career" className={button.bt3} onClick={onClickCareer}>
          Careers
        </MenuButton>
        <RightMenu onClick={e => e.stopPropagation()}>
          <ContactButton onClick={contactButton}>Contact Me</ContactButton>
          {renderContact()}
        </RightMenu>
      </MenuBar>
    </MenuContainer>
  );
};

export default Menu;
