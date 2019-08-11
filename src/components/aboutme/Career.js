import React from 'react';
import styled from 'styled-components';

// Style
const Container = styled.div`
  padding-top: 20px;
  display: grid;
  grid-row-gap: 30px;
  background-color: #f0f0f5;

  @media only screen and (device-width: 375px) and (orientation: portrait) {
    grid-row-gap: 15px;
  }
  @media only screen and (device-width: 667px) and (orientation: landscape) {
    grid-row-gap: 15px;
  }
`;
const Header = styled.h2`
  text-transform: uppercase;
  letter-spacing: 3px;
`;
const Work = styled.div`
  display: grid;
  text-align: left;
  margin-left: 200px;
  @media only screen and (min-device-width: 411px) and (max-device-width: 768px) and (orientation: portrait) {
    padding-left: 0;
    margin-left: 20px;
  }
  @media only screen and (min-device-width: 731px) and (max-device-width: 768px) and (orientation: landscape) {
    padding-left: 0;
    margin-left: 10px;
  }
  @media only screen and (device-width: 375px) and (orientation: portrait) {
    padding-left: 0;
    margin-left: 20px;
  }
  @media only screen and (device-width: 667px) and (orientation: landscape) {
    padding-left: 0;
    margin-left: 10px;
  }
  @media only screen and (device-width: 768px) and (orientation: portrait) {
    padding-left: 0;
    margin-left: 0px;
  }
  @media only screen and (device-width: 1024px) and (orientation: landscape) {
    padding-left: 0;
    margin-left: 0px;
  }
`;
const Subject = styled.h3`
  text-align: left;

  @media only screen and (min-device-width: 411px) and (max-device-width: 768px) and (orientation: portrait) {
    text-align: center;
  }
  @media only screen and (min-device-width: 731px) and (max-device-width: 768px) and (orientation: landscape) {
    text-align: center;
  }
  @media only screen and (device-width: 375px) and (orientation: portrait) {
    text-align: center;
  }
  @media only screen and (device-width: 667px) and (orientation: landscape) {
    text-align: center;
  }
  @media only screen and (device-width: 768px) and (orientation: portrait) {
    text-align: center;
  }
  @media only screen and (device-width: 1024px) and (orientation: landscape) {
    text-align: center;
  }
`;
const List = styled.ul`
  list-style-position: inside;
  margin-top: 0;
  font-size: 17px;
  @media only screen and (device-width: 768px) and (orientation: portrait) {
    margin-left: 100px;
  }
  @media only screen and (device-width: 1024px) and (orientation: landscape) {
    margin-left: 150px;
  }
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
        <Subject>Movie Assistant Producer</Subject>
        <List>
          <ListElement>6/12/2013 ~ 8/27/2013</ListElement>
          <ListElement>
            Heartbreak Hotel (Taeyangeul Hyanghae Sswara) released on 2015
          </ListElement>
        </List>
      </Work>
      <Work>
        <Subject>Republic of Korean Air Force</Subject>
        <List>
          <ListElement>6/28/2010 ~ 7/8/2012</ListElement>
          <ListElement>
            Discharged upon completing military service (Staff Sergeant)
          </ListElement>
        </List>
      </Work>
    </Container>
  );
};

export default Career;
