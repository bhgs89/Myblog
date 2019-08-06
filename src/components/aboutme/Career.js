import React from 'react';
import styled from 'styled-components';

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
const Work = styled.div`
  display: grid;
  text-align: left;
  margin-left: 150px;
`;
const List = styled.ul`
  list-style-position: inside;
  margin-top: 0;
`;
// Style End

const Career = () => {
  return (
    <Container>
      <Header>- Career -</Header>
      <Work>
        <h4>Movie Assistant Producer</h4>
        <List>
          <li>6/12/2013 ~ 8/27/2013</li>
          <li>Heartbreak Hotel (Taeyangeul Hyanghae Sswara) released on 2015</li>
        </List>
      </Work>
      <Work>
        <h4>Republic of Korean Air Force</h4>
        <List>
          <li>6/28/2010 ~ 7/8/2012</li>
          <li>Discharged upon completing military service (Staff Sergeant)</li>
        </List>
      </Work>
    </Container>
  );
};

export default Career;
