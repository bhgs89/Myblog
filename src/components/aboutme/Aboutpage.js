import React, { useContext, useEffect } from 'react';
import { ButtonContext } from '../../contexts/ButtonContext';
import styled from 'styled-components';
import IntroSection from './IntroSection';
import MajorSection from './MajorSection';
import InfoSection from './InfoSection';

// Style
const AboutContainer = styled.div`
  width: 100%;
  display: grid;
  background-color: white;
`;
// Style End

const Aboutpage = () => {
  const [button, setButton] = useContext(ButtonContext);

  useEffect(() => {
    const changeButton = () => {
      if (button.bt2 !== 'active item') {
        setButton({
          bt1: 'item',
          bt2: 'active item',
        });
      }
    };
    changeButton();
  }, [button, setButton]);

  return (
    <AboutContainer>
      <IntroSection />
      <MajorSection />
      <InfoSection />
    </AboutContainer>
  );
};

export default Aboutpage;
