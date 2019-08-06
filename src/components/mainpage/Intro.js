import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Style
const IntroContainer = styled.div`
  padding-top: 70px;
  padding-bottom: 70px;
  width: 100%;
  margin: auto;
  text-align: center;
`;
const Heder = styled.h1`
  text-decoration: underline;
  text-transform: uppercase;
  font-size: 250%;
`;
const MainContent = styled.p`
  font-weight: 700px;
  font-size: 120%;
  margin-bottom: 5px;
`;
const SubHeader = styled.h3`
  text-decoration: underline;
  margin-bottom: 20px;
`;
const LinkButton = styled.div`
  margin-top: 30px;
`;
const AboutButton = styled.span`
  font-size: 150%;
  background-color: black;
  border: none;
  border-radius: 20px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
  :active {
    border: none;
  }
`;

const Intro = () => {
  return (
    <IntroContainer>
      <Heder>Introduce Me</Heder>
      <MainContent>Web Developer (Front-end)</MainContent>
      <MainContent>(Los Angeles / OC based)</MainContent>
      <SubHeader>Objective</SubHeader>
      <MainContent>To make a better life, Be a better programmer</MainContent>
      <MainContent>From front-end developer to fullstack developer</MainContent>
      <SubHeader>Education</SubHeader>
      <MainContent>Computer Science</MainContent>
      <MainContent>California State University, Northridge</MainContent>
      <LinkButton>
        <Link to="/aboutme">
          <AboutButton>More about me</AboutButton>
        </Link>
      </LinkButton>
    </IntroContainer>
  );
};

export default Intro;
