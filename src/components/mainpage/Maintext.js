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

  @media only screen and (min-device-width: 411px) and (max-device-width: 768px) and (orientation: portrait) {
    height: 225px;
  }
  @media only screen and (min-device-width: 731px) and (max-device-width: 768px) and (orientation: landscape) {
    height: 400px;
  }

  @media only screen and (device-width: 375px) and (orientation: portrait) {
    height: 280px;
  }
  @media only screen and (device-width: 667px) and (orientation: landscape) {
    height: 400px;
  }
`;
const Image = styled.img`
  position: absolute;
  top: 10%;
  left: 15%;
  z-index: 0;

  @media only screen and (min-device-width: 411px) and (max-device-width: 768px) and (orientation: portrait) {
    left: 30px;
    width: 350px;
    height: 175px;
  }
  @media only screen and (min-device-width: 731px) and (max-device-width: 768px) and (orientation: landscape) {
    left: 60px;
    width: 600px;
    height: 300px;
  }
  @media only screen and (device-width: 375px) and (orientation: portrait) {
    left: 10px;
    width: 340px;
    height: 225px;
  }
  @media only screen and (device-width: 667px) and (orientation: landscape) {
    left: 40px;
    width: 500px;
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

  @media only screen and (min-device-width: 411px) and (max-device-width: 768px) and (orientation: portrait) {
    font-size: 20px;
    left: 180px;
    top: 140px;
    width: 200px;
    height: 100px;
  }
  @media only screen and (min-device-width: 731px) and (max-device-width: 768px) and (orientation: landscape) {
    font-size: 40px;
    left: 350px;
    width: 300px;
    height: 100px;
    top: 235px;
  }

  @media only screen and (device-width: 375px) and (orientation: portrait) {
    font-size: 20px;
    left: 180px;
    top: 180px;
    width: 200px;
    height: 100px;
  }
  @media only screen and (device-width: 667px) and (orientation: landscape) {
    font-size: 40px;
    left: 350px;
    height: 100px;
    top: 235px;
    width: 300px;
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
