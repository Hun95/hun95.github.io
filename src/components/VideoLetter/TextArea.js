import React, { useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import useText from '../../hooks/useText';
const TextArea = () => {
  const textsRef = useRef();
  const { isShows, showRef, isDisappear } = useText({
    number: 1000,
    disappear: 1400,
    showRef: textsRef,
  });

  return (
    <Container ref={textsRef} rotate={isShows} dis={isDisappear}>
      <Text>LOVE</Text>
    </Container>
  );
};

export default TextArea;

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;
  visibility: hidden;
  width: 1px;
  background: white;

  ${({ rotate }) => {
    if (rotate) {
      return css`
        visibility: visible;
        transition: all 2s ease-in-out;
        font-size: 120px;
      `;
    }
  }}

  ${({ dis }) => {
    if (dis) {
      return css`
        visibility: hidden;
      `;
    }
  }} /* @keyframes anime {
    0% {
      transform: matrix(1, 0, 0, 1, 0, 1);
      opacity: 0.7;
    }
    25% {
      transform: matrix(1, 0, 0, 1, 0, 10);
      opacity: 1;
    }
    50% {
      transform: matrix(1, 0, 0, 1, 0, 1);
      opacity: 0.7;
    }
    100% {
      transform: matrix(1, 0, 0, 1, 0, 0);
      opacity: 0;
    }
  } */
`;

export const Text = styled.h1`
  color: white;
  font-size: 20px;
`;
