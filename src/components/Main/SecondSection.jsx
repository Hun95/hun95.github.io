import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/MainPageProvider';
import design from '../../images/design.jpg';
import camera from '../../images/camera.jpg';
import Banner from '../Banner/';
const SecondSection = () => {
  const { secondRef } = useGlobalContext();
  return (
    <Container ref={secondRef}>
      <Introduce>
        <h1>안녕하세요</h1>
      </Introduce>
      <HeroContainer>
        <h1>
          기획
          <br />
          디자인
          <br />
          완벽하게
        </h1>
        <img src={design} />
      </HeroContainer>
      <HeroContainer>
        <img src={camera} />
        <h1>
          사진
          <br />
          동영상
          <br />
          무료촬영
        </h1>
      </HeroContainer>
      <MainText>
        홈페이지를
        <br />
        춤추게
        <br />
        만들어보세요.
      </MainText>
    </Container>
  );
};

export default SecondSection;

const Container = styled.section`
  height: 100vh;
  width: 100%;
`;
const Introduce = styled.div`
  height: 100vh;
  width: 100%;
  margin-bottom: 50vh;
  h1 {
    top: 50%;
    font-size: 50px;
    position: relative;
    text-align: center;
  }
`;

const HeroContainer = styled.div`
  h1 {
    font-size: 100px;
    text-align: left;
  }
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 calc(100% - 90vw);
  width: 100%;
  height: 50vh;
  img {
    max-height: 80vh;
    max-width: 80vw;
  }
  margin-bottom: 70vh;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    h1 {
      font-size: 50px;
    }
  }
`;

const MainText = styled.h2`
  text-align: center;
  font-size: 50px;
`;
