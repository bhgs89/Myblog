import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Menu from './Menu';
import RoutePath from './RoutePath';
import { ModalProvider } from '../contexts/ModalContext';
import { ButtonProvider } from '../contexts/ButtonContext';

const App = () => {
  return (
    <ModalProvider>
      <div className="ui container" style={{ width: '100%' }}>
        <BrowserRouter>
          <ButtonProvider>
            <Menu />
          </ButtonProvider>
          <RoutePath />
        </BrowserRouter>
      </div>
    </ModalProvider>
  );
};

export default App;
