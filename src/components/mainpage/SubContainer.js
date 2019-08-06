import React from 'react';
import styled from 'styled-components';
import Intro from './Intro';

// Style
const SubtextContainer = styled.div`
  display: grid;
  border: 1px solid grey;
  background-color: #f0f0f5;
`;
// Style End

const SubContainer = () => {
  return (
    <div>
      <SubtextContainer>
        <Intro />
        <div>b</div>
        <div>c</div>
      </SubtextContainer>
    </div>
  );
};

export default SubContainer;
