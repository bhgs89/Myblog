import React from 'react';
import styled from 'styled-components';
import Education from './Education';
import Career from './Career';

// Style
const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 500px;
`;
const EducationContainer = styled.div`
  background-color: black;
  color: white;
  text-align: center;
  padding-top: 30px;
`;
const CareerContainer = styled.div`
  background-color: white;
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
