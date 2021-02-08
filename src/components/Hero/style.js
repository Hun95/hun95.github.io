import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  text-align: center;

  padding: 1.0625rem calc((100vw - 970px) / 2);
  visibility: hidden;
  margin-top: 100px;
  ${({ kill }) => {
    if (kill) {
      return css`
        visibility: visible;
        animation: init 2s;
      `;
    }
  }}
  @keyframes init {
    from {
      transform: translateX(-40%);
      transition: all 0.5s ease;
    }
    to {
      transform: translateX(0%);
      transition: all 0.5s ease;
    }
  }
`;

export const Image = styled.img`
  max-width: 100%;
`;
export const Text = styled.h1`
  font-size: 30px;
  text-align: center;
`;
