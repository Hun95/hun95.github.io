import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/MainPageProvider';
import imageOne from '../../images/secondSectionImage.webp';
const FirstSection = () => {
  const {
    firstRef,
    firstA,
    firstB,
    firstC,
    firstD,
    firstE,
    firstF,
  } = useGlobalContext();

  let ctx;
  useEffect(() => {
    const canvas = firstA.current;
    ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.fillStyle = '#003D8D';
    ctx.fill();
  }, []);
  return (
    <Container ref={firstRef}>
      <Content>
        <h1>APPROACH</h1>
      </Content>
      <canvas ref={firstA} width='200' height='200' />
      <Img ref={firstB} src={imageOne} />
      <BlueBack ref={firstC}></BlueBack>
      <Tile ref={firstD}>경험에</Tile>
      <Tile ref={firstE}>가치를</Tile>
      <Tile ref={firstF}>더하다</Tile>
    </Container>
  );
};

export default FirstSection;

const Container = styled.section`
  height: 100vh;
  width: 100%;

  canvas {
    width: 5%;
    z-index: 2;
    position: absolute;
    left: 50%;
    right: 50%;
    bottom: 5%;
    animation: init 1s infinite;

    transform: translateX(-50%);
    @keyframes init {
      0%,
      100% {
        transform: translate(-50%, 0%);

        transition: ease-out;
      }
      50% {
        transform: translate(-50%, 15%);
        transition: ease-in;
      }
    }
  }
`;
const Img = styled.img`
  position: fixed;
  opacity: 0;
  top: 0;
  width: 100%;
  max-width: 100%;
  height: 100%;
  translate: scale(0);
`;
const Content = styled.div`
  position: relative;
  padding-top: 50vh;

  top: 15vh;

  transform: translate(0, -50%);
  text-align: center;
  h1 {
    font-size: 50px;
    text-align: center;
    z-index: 5;
    font-family: 'Noto Sans KR', sans-serif;
    @media screen and (min-width: 768px) {
      font-size: 150px;
    }
  }
`;

const BlueBack = styled.div`
  background: linear-gradient(#0053a3, #01307e);
  width: 100%;
  height: 100vh;
  opacity: 0;
  position: fixed;
  top: 0;
  z-index: 5;
`;

const Tile = styled.h2`
  width: 100%;
  height: 100vh;
  opacity: 0;
  position: fixed;
  top: 35%;
  text-align: center;
  font-size: 100px;
  z-index: 99;
  font-weight: 600;
  color: white;
`;
