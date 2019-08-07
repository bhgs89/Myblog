import React from 'react';
import styled from 'styled-components';

// Style
const Container = styled.div`
  padding-top: 20px;
  display: grid;
  grid-row-gap: 30px;
  background-color: #f0f0f5;
`;
const Header = styled.h2`
  text-transform: uppercase;
  letter-spacing: 3px;
`;
const Work = styled.div`
  display: grid;
  text-align: left;
  margin-left: 200px;
`;
const List = styled.ul`
  list-style-position: inside;
  margin-top: 0;
  font-size: 17px;
`;
const ListElement = styled.li`
  margin-bottom: 8px;
`;
// Style End

const Career = () => {
  return (
    <Container>
      <Header>- Career -</Header>
      <Work>
        <h3>Movie Assistant Producer</h3>
        <List>
          <ListElement>6/12/2013 ~ 8/27/2013</ListElement>
          <ListElement>Heartbreak Hotel (Taeyangeul Hyanghae Sswara) released on 2015</ListElement>
        </List>
      </Work>
      <Work>
        <h3>Republic of Korean Air Force</h3>
        <List>
          <ListElement>6/28/2010 ~ 7/8/2012</ListElement>
          <ListElement>Discharged upon completing military service (Staff Sergeant)</ListElement>
        </List>
      </Work>
    </Container>
  );
};

export default Career;
