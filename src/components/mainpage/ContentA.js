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
`;
const Heder = styled.h1`
  text-transform: uppercase;
  font-size: 250%;
`;
const Phylosophy = styled.div`
  width: 70%;
  margin: auto;
`;
const PhylosophyContent = styled.p`
  text-align: left;
  text-indent: 25px;
  font-size: 18px;
`;
// Style End

const ContentA = () => {
  return (
    <ContentContainer>
      <Heder>Computer Phylosophy</Heder>
      <Phylosophy>
        <PhylosophyContent>
          My musical philosophy is that music expresses myself on another level,
          it expresses my creative/imaginative side and helps me know what a
          composer was thinking or feeling when the music was written. Music is
          a powerful way for expressing emotions and capturing our internal
          experience of life. The key is that music helps us become more honest
          with ourselves. Music moves us, inspires us and often we feel
          connected to it. It helps me connect on a way that verbal or written
          communication can’t do, and helps me understand and capture composers’
          moment on when they wrote the piece. For my students I aspire to use
          music to move and inspire them
        </PhylosophyContent>
      </Phylosophy>
    </ContentContainer>
  );
};

export default ContentA;
