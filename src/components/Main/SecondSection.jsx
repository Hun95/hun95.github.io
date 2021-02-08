import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/MainPageProvider';

const SecondSection = () => {
  const { secondRef } = useGlobalContext();
  return (
    <Container ref={secondRef}>
      <Introduce>hello</Introduce>
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

  margin-top: 10px;
  h1 {
    top: 50%;
    position: relative;
    text-align: center;
  }
`;
