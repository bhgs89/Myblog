import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Menu from './Menu';
import RoutePath from './RoutePath';
import { ModalProvider } from '../contexts/ModalContext';
import { ButtonProvider } from '../contexts/ButtonContext';

const App = () => {
  return (
    <ModalProvider>
      <ButtonProvider>
        <div className="ui container" style={{ width: '100%' }}>
          <BrowserRouter>
            <Menu />
            <RoutePath />
          </BrowserRouter>
        </div>
      </ButtonProvider>
    </ModalProvider>
  );
};

export default App;
