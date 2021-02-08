import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
const FirstSection = () => {
  const canvasRef = useRef();
  let ctx;
  useEffect(() => {
    const canvas = canvasRef.current;
    ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.fillStyle = '#003D8D';
    ctx.fill();
  }, []);
  return (
    <Container>
      <Content>
        <h1>APPROACH</h1>
      </Content>
      <canvas ref={canvasRef} width='200' height='200' />
    </Container>
  );
};

export default FirstSection;

const Container = styled.section`
  height: 100vh;
  width: 100%;
  canvas {
    width: 50px;
    position: absolute;
    left: 50%;
    right: 50%;
    bottom: 28px;
    animation: init 2s infinite;

    transform: translateX(-50%);
    @keyframes init {
      0%,
      100% {
        transform: translate(-50%, 0%);

        transition: ease-out;
      }
      50% {
        transform: translate(-50%, 10%);
        transition: ease-in;
      }
    }
  }
`;

const Content = styled.div`
  position: relative;
  max-height: 100%;
  top: 50%;
  transform: translate(0, -50%);
  text-align: center;
  h1 {
    font-size: 50px;
    text-align: center;

    font-family: 'Noto Sans KR', sans-serif;
    @media screen and (min-width: 768px) {
      font-size: 150px;
    }
  }
`;
