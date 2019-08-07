import React from 'react';
import styled from 'styled-components';
import profile from '../../pics/profile.jpg';

// Style
const IntroContainer = styled.div`
  position: relative;
  height: 550px;
  width: 850px;
  margin: 0 auto 0 auto;
  padding-top: 80px;
`;
const ImageContainer = styled.div`
  position: absolute;
  width: 350px;
  height: 450px;
  left: 0;
  padding-top: 30px;
  text-align: center;
`;
const ProfileImage = styled.img`
  height: 350px;
  border-radius: 50%;
`;
const ProfileContent = styled.div`
  position: absolute;
  width: 500px;
  height: 450px;
  right: 0;
  padding-top: 40px;
  text-align: left;
`;
const Introduction = styled.div`
  font-size: 16px;
  font-weight: 700px;
`;
const Text = styled.p`
  margin-bottom: 10px;
`;
// Style End

const IntroSection = () => {
  return (
    <IntroContainer>
      <ImageContainer>
        <ProfileImage src={profile} alt="profile image" />
      </ImageContainer>
      <ProfileContent>
        <h1>Hello</h1>
        <Introduction>
          <Text>I am Han(gwonsok) Baek.</Text>
          <Text>I am Front-End Web Developer.</Text>
          <Text>I graduated from California State University, Northridge in 2019</Text>
          <Text>I was born in Korea and spend few year to study in LA when I was 18.</Text>
          <Text>After I discharged from Korean Army, I came back to USA.</Text>
          <Text>I had studied about Film for a while.</Text>
          <Text>But, I changed my major from Film to Computer Science,</Text>
          <Text> because I knew I will love it and I can do it well.</Text>
          <Text>I was right!!</Text>
          <Text>Now, it is my life and future.</Text>
        </Introduction>
      </ProfileContent>
    </IntroContainer>
  );
};

export default IntroSection;
