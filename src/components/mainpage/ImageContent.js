import React from 'react';
import styled from 'styled-components';
import computer_img from '../../pics/computer_img.png';
const Image = styled.img`
  width: 100%;
  height: 470px;
`;

const ImageContent = () => {
  return <Image src={computer_img} alt="Compuet Science Image" />;
};

export default ImageContent;
