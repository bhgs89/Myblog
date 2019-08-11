import React from 'react';
import styled from 'styled-components';
import computer_img from '../../pics/computer_img.png';

// const Image = styled.img`
//   width: 100%;
//   height: 470px;

//   @media only screen and (min-device-width: 411px) and (max-device-width: 768px) and (orientation: portrait) {
//     height: 250px;
//   }
//   @media only screen and (min-device-width: 731px) and (max-device-width: 768px) and (orientation: landscape) {
//     height: 280px;
//   }

//   @media only screen and (device-width: 375px) and (orientation: portrait) {
//     height: 240px;
//   }
//   @media only screen and (device-width: 667px) and (orientation: landscape) {
//     height: 280px;
//   }
// `;

// const ImageContent = () => {
//   return <Image src={computer_img} alt="Compuet Science Image" />;
// };

const Image = styled.div`
  background-image: url(${computer_img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

const ImageContent = () => {
  return <Image />;
};

export default ImageContent;
