import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/MainPageProvider';
import imageOne from '../../images/secondSectionImage.jpg';
const SecondSection = () => {
  const { firstRef } = useGlobalContext();
  return (
    <Container ref={firstRef}>
      <img src={imageOne} />
      <Introduce>
        <h1>hello</h1>
      </Introduce>
    </Container>
  );
};

export default SecondSection;

const Container = styled.section`
  height: 100vh;
  width: 100%;
  max-width: 100%;
`;
const Introduce = styled.div`
  height: 100vh;
  width: 100%;
  background: linear-gradient(#01509f, #01317d);
  margin-top: 0px;
  h1 {
    top: 50%;
    position: relative;
    text-align: center;
  }
`;
