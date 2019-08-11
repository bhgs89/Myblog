import React from 'react';
import styled from 'styled-components';
import computer_img from '../../pics/computer_img.png';

const Container = styled.div`
  @media only screen and (min-device-width: 411px) and (orientation: portrait) {
    height: 250px;
  }
  @media only screen and (min-device-width: 731px) and (orientation: landscape) {
    height: 280px;
  }

  @media only screen and (min-device-width: 375px) and (orientation: portrait) {
    height: 240px;
  }
  @media only screen and (min-device-width: 667px) and (orientation: landscape) {
    height: 280px;
  }

  @media only screen and (min-device-width: 768px) and (orientation: portrait) {
    height: 500px;
  }
  @media only screen and (min-device-width: 1024px) and (orientation: landscape) {
    height: 600px;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 470px;

  @media only screen and (min-device-width: 411px) and (orientation: portrait) {
    height: 250px;
  }
  @media only screen and (min-device-width: 731px) and (orientation: landscape) {
    height: 280px;
  }

  @media only screen and (min-device-width: 375px) and (orientation: portrait) {
    height: 240px;
  }
  @media only screen and (min-device-width: 667px) and (orientation: landscape) {
    height: 280px;
  }

  @media only screen and (min-device-width: 768px) and (orientation: portrait) {
    height: 500px;
  }
  @media only screen and (min-device-width: 1024px) and (orientation: landscape) {
    height: 600px;
  }
`;

const ImageContent = () => {
  return (
    <Container>
      <Image src={computer_img} alt="Compuet Science Image" />
    </Container>
  );
};

export default ImageContent;
