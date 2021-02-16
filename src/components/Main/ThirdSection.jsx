import React from 'react';
import { useGlobalContext } from '../../context/MainPageProvider';
import styled from 'styled-components';

const ThirdSection = () => {
  const { thirdRef, canvasRef } = useGlobalContext();

  return (
    <Container ref={thirdRef}>
      <CanvasContainer>
        <canvas ref={canvasRef} width='3840' height='2160'></canvas>
      </CanvasContainer>
    </Container>
  );
};

export default ThirdSection;

const Container = styled.section`
  height: 100vh;
  width: 100%;
`;

const CanvasContainer = styled.div`
  top: 0;
  height: 100%;
  left: 0;
  width: 100%;
  position: fixed;

  canvas {
    position: absolute;
    top: 50%;
    left: 50%;
  }
`;
