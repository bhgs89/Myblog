import React from 'react';
import styled from 'styled-components';
import java from '../../pics/java.png';
import javascript_logo from '../../pics/javascript_logo.png';
import html_logo from '../../pics/html.svg';
import css_logo from '../../pics/css.svg';
import react_logo from '../../pics/react.png';

// Style
const MajorContainer = styled.div`
  background-color: white;
`;
const MajorContent = styled.div`
  padding-top: 80px;
  text-align: center;
  @media only screen and (device-width: 411px) and (orientation: portrait) {
    padding-top: 30px;
  }
  @media only screen and (device-width: 731px) and (orientation: landscape) {
    padding-top: 30px;
  }

  @media only screen and (device-width: 375px) and (orientation: portrait) {
    padding-top: 30px;
  }
  @media only screen and (device-width: 667px) and (orientation: landscape) {
    padding-top: 30px;
  }

  @media only screen and (device-width: 1024px) and (orientation: landscape) {
    padding-top: 30px;
  }
`;
const Languages = styled.div`
  display: grid;
  padding-top: 50px;
`;
const ImageContainer = styled.div`
  display: grid;
  text-align: right;
  padding-left: 600px;
  padding-right: 600px;
  margin-bottom: 100px;
  @media only screen and (device-width: 411px) and (orientation: portrait) {
    padding-right: 30px;
    padding-left: 30px;
  }
  @media only screen and (device-width: 731px) and (orientation: landscape) {
    padding-right: 30px;
    padding-left: 30px;
  }

  @media only screen and (device-width: 375px) and (orientation: portrait) {
    padding-right: 30px;
    padding-left: 30px;
  }
  @media only screen and (device-width: 667px) and (orientation: landscape) {
    padding-right: 30px;
    padding-left: 30px;
  }

  @media only screen and (device-width: 768px) and (orientation: portrait) {
    padding-right: 30px;
    padding-left: 30px;
  }
  @media only screen and (device-width: 1024px) and (orientation: landscape) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;
const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const Image = styled.img`
  height: 100px;
`;
// Style End

const MajorSection = () => {
  return (
    <MajorContainer>
      <MajorContent>
        <h2>SKILLS</h2>
        <Languages>
          <ImageContainer>
            <Row>
              <div style={{ marginRight: 'auto' }}>
                <Image src={javascript_logo} alt="javascript image" />
              </div>
              <div style={{ maringLeft: 'auto' }}>
                <Image src={react_logo} alt="react image" />
              </div>
            </Row>
            <Row>
              <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                <Image src={html_logo} alt="html image" />
              </div>
              <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                <Image src={css_logo} alt="css image" />
              </div>
            </Row>
            <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
              <Image src={java} alt="java image" />
            </div>
          </ImageContainer>
        </Languages>
      </MajorContent>
    </MajorContainer>
  );
};

export default MajorSection;
