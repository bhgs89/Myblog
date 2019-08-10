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

  @media only screen and (min-device-width: 411px) and (orientation: portrait) {
    height: 225px;
  }
  @media only screen and (min-device-width: 731px) and (orientation: landscape) {
    height: 400px;
  }
`;
const Image = styled.img`
  position: absolute;
  top: 10%;
  left: 15%;
  z-index: 0;

  @media only screen and (min-device-width: 411px) and (orientation: portrait) {
    left: 30px;
    width: 350px;
    height: 175px;
  }
  @media only screen and (min-device-width: 731px) and (orientation: landscape) {
    left: 80px;
    width: 600px;
    height: 300px;
  }
`;
// and (orientation: portrait)
const Header = styled.h1`
  position: relative;
  margin: 0;
  top: 450px;
  left: 50%;
  color: white;
  font-size: 60px;
  font-weight: 700;

  @media only screen and (min-device-width: 411px) and (orientation: portrait) {
    font-size: 20px;
    left: 180px;
    top: 140px;
    width: 300px;
    height: 100px;
  }
  @media only screen and (min-device-width: 731px) and (orientation: landscape) {
    font-size: 40px;
    left: 400px;
    width: 300px;
    height: 100px;
    top: 235px;
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
