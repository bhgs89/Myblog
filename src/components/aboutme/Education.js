import React from 'react';
import styled from 'styled-components';
import csun_logo from '../../pics/csun_logo.png';
import smc_logo from '../../pics/smc_logo.png';

// Style
const Container = styled.div`
  padding-top: 20px;
  display: grid;
  grid-row-gap: 30px;
`;
const Header = styled.h2`
  text-transform: uppercase;
  letter-spacing: 3px;
`;
const School = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  grid-column-gap: 15px;
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
          <h4>California State University, Northridge (2017 ~ 2019)</h4>
          <List>
            <li>Undergraduated in May, 2019</li>
            <li>Bachelor of Science, Computer Science</li>
          </List>
        </SchoolContent>
      </School>
      <School>
        <ImageContainer>
          <Image src={smc_logo} alt="smc logo" />
        </ImageContainer>
        <SchoolContent>
          <h4>Santa Monica College (2013 ~ 2017)</h4>
          <List>
            <li>Computer Science Major (2015 ~ 2017)</li>
            <li>Film Major (2013 ~ 2015)</li>
          </List>
        </SchoolContent>
      </School>
    </Container>
  );
};

export default Education;
