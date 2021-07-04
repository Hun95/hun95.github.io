import React from 'react';
import logo from '../../images/mainlogo.jpg';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/MainPageProvider';

const FourthSection = () => {
  const { fourthRef } = useGlobalContext();
  return (
    <div ref={fourthRef}>
      <ImgContainer>
        <img src={logo} />
        <h1>I AM</h1>
        <br />
        <h1>수염난친구</h1>

        <h2>
          <b style={{ color: '#003D8D' }}>PLEASURE</b>
          <br />
          인터렉션을 제작하는 것에
          <br />
          기쁨을 느낍니다.
        </h2>
        <ContactButton href='https://www.naver.com'>Contact Us</ContactButton>

        <p>
          박세훈
          <br /> hun95@kakao.com
          <br /> 010-6413-5418
        </p>
      </ImgContainer>
    </div>
  );
};

export default FourthSection;

const ImgContainer = styled.div`
  text-align: center;
  width: 100%;
  height: auto;
  margin-top: 50vh;
  h1 {
    font-size: 80px;
    font-weight: bold;
  }

  h2 {
    margin-top: 50vh;
    font-size: 50px;
  }
  p {
    margin-top: 5vh;
  }
`;

const ContactButton = styled.button`
  margin-top: 50vh;
  width: 100px;
  height: 50px;
  text-align: center;
  cursor: pointer;
  z-index: 999;
  position: relative;

  background: linear-gradient(#0053a3, #01307e);
  color: white;
  border-radius: 50px;
`;
