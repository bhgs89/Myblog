import React from 'react';
import styled from 'styled-components';

// Style
const FooterContainer = styled.div`
  position: relative;
  height: 190px;
`;
const ContactInfo = styled.div`
  text-align: center;
`;
const Email = styled.div`
  font-size: 16px;
  padding-top: 30px;
  font-family: system-ui;
`;
const Phone = styled.div`
  font-size: 16px;
  margin-top: 10px;
`;
const ButtonInfo = styled.div`
  margin-top: 20px;
`;
const Icon = styled.i`
  width: 40px;
  cursor: pointer;
`;
const InlineContent = styled.div`
  position: absolute;
  background-color: black;
  color: white;
  text-align: center;
  height: 40px;
  width: 100%;
  padding: 10px;
  bottom: 0px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <ContactInfo>
        <Email>
          <p>han.baek.program@gmail.com</p>
        </Email>
        <Phone>
          <p>+1 (818) 963 - 1903</p>
        </Phone>
        <ButtonInfo>
          <Icon
            className="big github icon"
            onClick={() => window.open('https://github.com/bhgs89')}
          />
          <Icon
            className="big linkedin icon"
            onClick={() => window.open('https://www.linkedin.com/in/baekhan')}
          />
        </ButtonInfo>
      </ContactInfo>
      <InlineContent>2019 by Han Baek.</InlineContent>
    </FooterContainer>
  );
};

export default Footer;
