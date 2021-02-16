import React from 'react';
import { useGlobalContext } from '../../context/MainPageProvider';
import logo from '../../images/mainlogo.jpg';
import styled from 'styled-components';

const FourthSection = () => {
  const { fourthRef } = useGlobalContext();
  return (
    <div ref={fourthRef}>
      <ImgContainer>
        <img src={logo} />
        <h1>WE ARE</h1>
        <br />
        <h1>수염난친구들</h1>
        <h2>
          <b style={{ color: '#003D8D' }}>제작</b>
          <br />
          50만원부터.
        </h2>

        <h2>
          <b style={{ color: '#003D8D' }}>관리비</b>
          <br />
          10,000원 / 년
          <br />
        </h2>

        <h2>
          <b style={{ color: '#003D8D' }}>PLEASURE</b>
          <br />
          당신의 기쁨을 위해
          <br />
          일합니다.
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
