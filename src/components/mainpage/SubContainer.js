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

  @media only screen and (min-device-width: 375px) and (orientation: portrait) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    height: 480px;
  }
  @media only screen and (min-device-width: 411px) and (orientation: portrait) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    height: 500px;
  }
  @media only screen and (min-device-width: 768px) and (orientation: portrait) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    height: 1000px;
  }

  @media only screen and (min-device-width: 667px) and (max-device-width: 669px) and (orientation: landscape) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    height: 560px;
  }
  @media only screen and (min-device-width: 731px) and (max-device-width: 733px) and (orientation: landscape) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    height: 560px;
  }
  @media only screen and (min-device-width: 1024px) and (max-device-width: 1280px) and (orientation: landscape) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    height: 1200px;
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
