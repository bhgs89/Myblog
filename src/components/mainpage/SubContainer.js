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
