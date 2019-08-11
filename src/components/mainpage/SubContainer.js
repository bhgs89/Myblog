import React from 'react';
import styled from 'styled-components';
import Intro from './Intro';
import ImageContent from './ImageContent';
import ContentA from './ContentA';

// Style
const SubtextContainer = styled.div`
  display: grid;
  border: 1px solid grey;
  background-color: #f0f0f5;
`;
const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 470px;

  @media only screen and (device-width: 411px) and (orientation: portrait) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    height: 550px;
  }
  @media only screen and (device-width: 731px) and (orientation: landscape) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    height: 680px;
  }

  @media only screen and (device-width: 375px) and (orientation: portrait) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    height: 460px;
  }
  @media only screen and (device-width: 667px) and (orientation: landscape) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    height: 660px;
  }
`;
// Style End

const SubContainer = () => {
  return (
    <div>
      <SubtextContainer>
        <Intro />
        <ContentContainer>
          <ImageContent />
          <ContentA />
        </ContentContainer>
      </SubtextContainer>
    </div>
  );
};

export default SubContainer;
