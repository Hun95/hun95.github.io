import styled, { css } from 'styled-components';

export const FlexBox = styled.div`
  display: flex;
  ${({ space, center }) => {
    if (center) {
      return css`
        justify-content: center;
      `;
    } else if (space) {
      return css`
        justify-content: space-between;
      `;
    }
  }}
`;
