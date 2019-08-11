import React from 'react';
import styled from 'styled-components';
import profile from '../../pics/profile.jpg';

// Style
const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const IntroContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 5fr;
  height: 550px;
  margin: 0;
  padding-top: 80px;
  width: 60%;

  @media only screen and (min-device-width: 411px) and (max-device-width: 768px) and (orientation: portrait) {
    padding-top: 30px;
    width: 100%;
    height: 450px;
  }
  @media only screen and (min-device-width: 731px) and (max-device-width: 768px) and (orientation: landscape) {
    padding-top: 30px;
    width: 100%;
    height: 450px;
  }
`;
const ImageContainer = styled.div`
  height: 450px;
  padding-top: 30px;
  right: 50px;
  text-align: center;
  @media only screen and (min-device-width: 411px) and (max-device-width: 768px) and (orientation: portrait) {
    padding-top: 60px;
  }
  @media only screen and (min-device-width: 731px) and (max-device-width: 768px) and (orientation: landscape) {
  }
`;
const ProfileImage = styled.img`
  height: 350px;
  border-radius: 50%;

  @media only screen and (min-device-width: 411px) and (max-device-width: 768px) and (orientation: portrait) {
    height: 250px;
  }
  @media only screen and (min-device-width: 731px) and (max-device-width: 768px) and (orientation: landscape) {
  }
`;
const ProfileContent = styled.div`
  height: 450px;
  right: 0;
  padding-top: 40px;
  padding-left: 50px;
  text-align: left;

  @media only screen and (min-device-width: 411px) and (max-device-width: 768px) and (orientation: portrait) {
    padding-left: 10px;
    padding-right: 5px;
  }
  @media only screen and (min-device-width: 731px) and (max-device-width: 768px) and (orientation: landscape) {
    padding-left: 10px;
  }
`;
const Introduction = styled.div`
  font-size: 16px;
  font-weight: 700px;

  @media only screen and (min-device-width: 411px) and (max-device-width: 768px) and (orientation: portrait) {
    font-size: 10px;
  }
  @media only screen and (min-device-width: 731px) and (max-device-width: 768px) and (orientation: landscape) {
    font-size: 13px;
  }
`;
const Text = styled.p`
  margin-bottom: 10px;
`;
// Style End

const IntroSection = () => {
  return (
    <Container>
      <IntroContainer>
        <ImageContainer>
          <ProfileImage src={profile} alt="profile image" />
        </ImageContainer>
        <ProfileContent>
          <h1>Hello</h1>
          <Introduction>
            <Text>I am Han(gwonsok) Baek.</Text>
            <Text>I am Front-End Web Developer.</Text>
            <Text>
              I graduated from California State University, Northridge in 2019
            </Text>
            <Text>
              I was born in Korea and spend few year to study in LA when I was
              18.
            </Text>
            <Text>
              After I discharged from Korean Army, I came back to USA.
            </Text>
            <Text>I had studied about Film for a while.</Text>
            <Text>But, I changed my major from Film to Computer Science,</Text>
            <Text> because I knew I will love it and I can do it well.</Text>
            <Text>I was right!!</Text>
            <Text>Now, it is my life and future.</Text>
          </Introduction>
        </ProfileContent>
      </IntroContainer>
    </Container>
  );
};

export default IntroSection;
