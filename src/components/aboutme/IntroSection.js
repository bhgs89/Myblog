import React from 'react';
import styled from 'styled-components';
import profile from '../../pics/profile.jpg';

// Style
const IntroContainer = styled.div`
  position: relative;
  height: 450px;
  width: 700px;
  margin: 0 auto 0 auto;
  padding-top: 40px;
`;
const ImageContainer = styled.div`
  position: absolute;
  width: 350px;
  height: 350px;
  left: 0;
  text-align: center;
`;
const ProfileImage = styled.img`
  height: 350px;
  border-radius: 50%;
`;
const ProfileContent = styled.div`
  position: absolute;
  width: 350px;
  height: 350px;
  right: 0;
  padding-top: 40px;
  text-align: left;
`;
const Introduction = styled.div`
  font-size: 16px;
  font-weight: 700px;
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
          <p>I am Han(gwonsok) Baek.</p>
          <p />
          <p>I undergraduated from California State University, Northridge in 2019</p>
          <p>I born in Korean and moved to USA since I was 18</p>
          <p>EDIT!! I discharged from Korean Air Force Army</p>
          <p>EDIT!! I transferred from Santa Monica College to CSUN</p>
          <p>EDIT!! I undergraduated from California State University, Northridge in 2019</p>
        </Introduction>
      </ProfileContent>
    </IntroContainer>
  );
};

export default IntroSection;
