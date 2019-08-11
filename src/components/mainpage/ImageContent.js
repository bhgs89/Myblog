import React from 'react';
import styled from 'styled-components';
import computer_img from '../../pics/computer_img.png';
const Image = styled.img`
  width: 100%;
  height: 470px;

  @media only screen and (min-device-width: 411px) and (max-device-width: 768px) and (orientation: portrait) {
    height: 300px;
  }
  @media only screen and (min-device-width: 731px) and (max-device-width: 768px) and (orientation: landscape) {
    height: 400px;
  }

  @media only screen and (device-width: 375px) and (orientation: portrait) {
    height: 220px;
  }
  @media only screen and (device-width: 667px) and (orientation: landscape) {
    height: 380px;
  }
`;

const ImageContent = () => {
  return <Image src={computer_img} alt="Compuet Science Image" />;
};

export default ImageContent;
