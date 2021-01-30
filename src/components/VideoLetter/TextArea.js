import React, { useRef } from 'react';
import styled, { css } from 'styled-components';
import useText from '../../hooks/useText';
const TextArea = () => {
  const { isShow, showRef, isDisappear } = useText({
    number: 1000,
    disappear: 1400,
  });

  return (
    <Container ref={showRef} rotate={isShow} dis={isDisappear}>
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

  ${({ rotate }) => {
    if (rotate) {
      return css`
        visibility: visible;
        animation: init 300ms;
      `;
    }
  }}

  ${({ dis }) => {
    if (dis) {
      return css`
        visibility: hidden;
      `;
    }
  }}

  @keyframes init {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(180);
    }
  }
`;

export const Text = styled.h1`
  color: white;
  font-size: 200px;
`;
