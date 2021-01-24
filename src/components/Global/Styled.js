import styled, { css } from 'styled-components';
import { breakDown } from './Theme';
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

export const PageWrapper = styled.div`
  padding: 1rem 5rem;
  ${breakDown.desktop({ padding: '1rem 1rem' })}
`;
