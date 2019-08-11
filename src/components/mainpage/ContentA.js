import React from 'react';
import styled from 'styled-components';

// Style
const ContentContainer = styled.div`
  color: white;
  background-color: black;
  padding-top: 70px;
  padding-bottom: 70px;
  text-align: center;
  height: 470px;

  @media only screen and (min-device-width: 411px) and (orientation: portrait) {
    padding-top: 30px;
    padding-bottom: 0;
    height: 250px;
  }
  @media only screen and (min-device-width: 731px) and (orientation: landscape) {
    padding-top: 30px;
    padding-bottom: 0;
    height: 280px;
  }

  @media only screen and (min-device-width: 375px) and (orientation: portrait) {
    padding-top: 30px;
    padding-bottom: 0;
    height: 240px;
  }
  @media only screen and (min-device-width: 667px) and (orientation: landscape) {
    padding-top: 30px;
    padding-bottom: 0;
    height: 280px;
  }

  @media only screen and (min-device-width: 768px) and (orientation: portrait) {
    padding-top: 60px;
    padding-bottom: 0;
    height: 500px;
  }
  @media only screen and (min-device-width: 1024px) and (orientation: landscape) {
    padding-top: 60px;
    padding-bottom: 0;
    height: 600px;
  }
`;
const Header = styled.h1`
  text-transform: uppercase;
  font-size: 250%;
  @media only screen and (min-device-width: 411px) and (orientation: portrait) {
    font-size: 15px;
  }
  @media only screen and (min-device-width: 731px) and (orientation: landscape) {
    font-size: 25px;
  }

  @media only screen and (min-device-width: 375px) and (orientation: portrait) {
    font-size: 13px;
  }
  @media only screen and (min-device-width: 667px) and (orientation: landscape) {
    font-size: 25px;
  }

  @media only screen and (min-device-width: 768px) and (orientation: portrait) {
    font-size: 25px;
  }
  @media only screen and (min-device-width: 1024px) and (orientation: landscape) {
    font-size: 30px;
  }
`;
const Phylosophy = styled.div`
  width: 80%;
  margin: auto;

  @media only screen and (min-device-width: 768px) and (orientation: portrait) {
    padding-top: 20px;
  }
  @media only screen and (min-device-width: 1024px) and (orientation: landscape) {
    padding-top: 30px;
  }
`;
const PhylosophyContent = styled.p`
  text-align: left;
  text-indent: 25px;
  font-size: 19px;
  letter-spacing: 2px;

  @media only screen and (min-device-width: 411px) and (orientation: portrait) {
    text-align: center;
    text-indent: 0;
    font-size: 12px;
    letter-spacing: 1px;
  }
  @media only screen and (min-device-width: 731px) and (orientation: landscape) {
    text-align: center;
    text-indent: 0;
    font-size: 15px;
    letter-spacing: 1px;
  }

  @media only screen and (min-device-width: 375px) and (orientation: portrait) {
    text-align: center;
    text-indent: 0;
    font-size: 11px;
    letter-spacing: 1px;
  }
  @media only screen and (min-device-width: 667px) and (orientation: landscape) {
    text-align: center;
    text-indent: 0;
    font-size: 15px;
    letter-spacing: 1px;
  }

  @media only screen and (min-device-width: 768px) and (orientation: portrait) {
    text-align: left;
    text-indent: 20px;
    font-size: 20px;
    letter-spacing: 2px;
  }
  @media only screen and (min-device-width: 1024px) and (orientation: landscape) {
    text-align: left;
    text-indent: 20px;
    font-size: 25px;
    letter-spacing: 2px;
  }
`;
// Style End

const ContentA = () => {
  return (
    <ContentContainer>
      <Header>Computer philosophie</Header>
      <Phylosophy>
        <PhylosophyContent>
          My computer philosophie is that computer science is necessary to
          improve our lives. It will be more important in the future, because we
          cannot live without its system. The most people only know how to use
          their software. They don't know how it works, because they don't need
          to know it. Knowing how it works is our (Programmers) job! Therefore,
          we need to keep study our field. To make better world! To make better
          life! My study is going to be endless.
        </PhylosophyContent>
      </Phylosophy>
    </ContentContainer>
  );
};

export default ContentA;
