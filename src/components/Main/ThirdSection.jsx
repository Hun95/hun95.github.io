import React from 'react';
import { useGlobalContext } from '../../context/MainPageProvider';
import styled from 'styled-components';

const ThirdSection = () => {
  const { thirdRef, canvasRef } = useGlobalContext();

  return (
    <Container ref={thirdRef}>
      <canvas ref={canvasRef} width='3840' height='2160'></canvas>
    </Container>
  );
};

export default ThirdSection;

const Container = styled.section`
  height: 200vh;
  width: 100%;
  canvas {
    max-width: 100%;
    max-height: 100%;

    height: 100vh;
    position: fixed;
    top: 0;
    z-index: -1;
  }
`;
