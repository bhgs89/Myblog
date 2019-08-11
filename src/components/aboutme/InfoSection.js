import React from 'react';
import styled from 'styled-components';
import Education from './Education';
import Career from './Career';

// Style
const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 500px;
  width: 100%;

  @media only screen and (min-device-width: 411px) and (orientation: portrait) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    height: 850px;
  }
  @media only screen and (min-device-width: 731px) and (orientation: landscape) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    height: 800px;
  }
  @media only screen and (min-device-width: 375px) and (orientation: portrait) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    height: 850px;
  }
  @media only screen and (min-device-width: 667px) and (orientation: landscape) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    height: 800px;
  }

  @media only screen and (min-device-width: 768px) and (orientation: portrait) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    height: 800px;
  }
  @media only screen and (min-device-width: 1024px) and (orientation: landscape) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    height: 800px;
  }
`;
const EducationContainer = styled.div`
  background-color: black;
  color: white;
  text-align: center;
  padding-top: 30px;
`;
const CareerContainer = styled.div`
  background-color: #f0f0f5;
  color: black;
  text-align: center;
  padding-top: 30px;
`;
// Style End

const InfoSection = () => {
  return (
    <InfoContainer>
      <EducationContainer>
        <Education />
      </EducationContainer>
      <CareerContainer>
        <Career />
      </CareerContainer>
    </InfoContainer>
  );
};

export default InfoSection;
