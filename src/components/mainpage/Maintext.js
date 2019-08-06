import React from 'react';
import home_main from '../../pics/home_main.png';
import styled from 'styled-components';

// Style
const MainTextContainer = styled.div`
  position: relative;
  height: 700px;
  background: #1b1c1d;
  color: white;
  width: 100%;
`;
const Image = styled.img`
  position: absolute;
  top: 10%;
  left: 15%;
  z-index: 0;
`;
const Header = styled.h1`
  position: relative;
  margin: 0;
  top: 450px;
  left: 50%;
  color: white;
  font-size: 60px;
  font-weight: 700;
  @media only screen and (max-width: 800px) {
    visibility: hidden;
  }
`;

const Maintext = props => {
  return (
    <MainTextContainer>
      <Image src={home_main} alt="Main" />
      <Header>Create your life</Header>
    </MainTextContainer>
  );
};

export default Maintext;
