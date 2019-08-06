import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import Mainpage from './mainpage/Mainpage';
import Aboutpage from './aboutme/Aboutpage';
import { ModalContext } from '../contexts/ModalContext';

const RoutePath = () => {
  const [modal, setModal] = useContext(ModalContext);

  const closeModal = () => {
    if (modal.contact) {
      setModal({
        contact: false,
        email: false,
      });
    }
  };

  return (
    <div className="content_container" onClick={closeModal}>
      <Route path="/" exact component={Mainpage} />
      <Route path="/aboutme" exact component={Aboutpage} />
    </div>
  );
};

export default RoutePath;
