import React from 'react';
import styled from 'styled-components';
import csun_logo from '../../pics/csun_logo.png';
import smc_logo from '../../pics/smc_logo.png';

// Style
const Container = styled.div`
  padding-top: 20px;
  display: grid;
  grid-row-gap: 30px;
  padding-bottom: 20px;
`;
const Header = styled.h2`
  text-transform: uppercase;
  letter-spacing: 3px;
`;
const School = styled.div`
  display: grid;
  grid-template-columns: 2fr 4fr;
  grid-column-gap: 20px;
`;
const ImageContainer = styled.div`
  text-align: right;
`;
const Image = styled.img`
  height: 100px;
`;
const SchoolContent = styled.div`
  margin-right: 20px;
  text-align: left;
`;
const List = styled.ul`
  list-style-position: inside;
  font-size: 17px;
  @media only screen and (min-device-width: 411px) and (max-device-width: 768px) and (orientation: portrait) {
    font-size: 12px;
    padding-left: 5px;
  }
  @media only screen and (min-device-width: 731px) and (max-device-width: 768px) and (orientation: landscape) {
    font-size: 10px;
  }
`;
const ListElement = styled.li`
  margin-bottom: 8px;
`;
// Style End

const Education = () => {
  return (
    <Container>
      <Header>- Education -</Header>
      <School>
        <ImageContainer>
          <Image src={csun_logo} alt="csun logo" />
        </ImageContainer>
        <SchoolContent>
          <h3>California State University, Northridge (2017 ~ 2019)</h3>
          <List>
            <ListElement>Undergraduated in May, 2019</ListElement>
            <ListElement>Bachelor of Science, Computer Science</ListElement>
          </List>
        </SchoolContent>
      </School>
      <School>
        <ImageContainer>
          <Image src={smc_logo} alt="smc logo" />
        </ImageContainer>
        <SchoolContent>
          <h3>Santa Monica College (2013 ~ 2017)</h3>
          <List>
            <ListElement>Computer Science Major (2015 ~ 2017)</ListElement>
            <ListElement>Film Major (2013 ~ 2015)</ListElement>
          </List>
        </SchoolContent>
      </School>
    </Container>
  );
};

export default Education;
