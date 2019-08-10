import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Menu from './Menu';
import RoutePath from './RoutePath';
import Footer from './Footer';
import { ModalProvider } from '../contexts/ModalContext';
import { ButtonProvider } from '../contexts/ButtonContext';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin: 0;
`;

const App = () => {
  return (
    <ModalProvider>
      <ButtonProvider>
        <Container>
          <BrowserRouter>
            <Menu />
            <RoutePath />
            <Footer />
          </BrowserRouter>
        </Container>
      </ButtonProvider>
    </ModalProvider>
  );
};

export default App;
