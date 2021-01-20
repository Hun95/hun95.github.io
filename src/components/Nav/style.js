import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
/*style in global */
import { setColor, breakDown, breakUp } from '../Global/Theme';
import { FlexBox } from '../Global/Styled';

/* icon */

export const NavContainer = styled(FlexBox)`
  padding: 1.0625rem 1.5px;
  align-items: center;
`;

export const NavTitle = styled(Link)``;

export const LogoImg = styled.img`
  width: 50px;
  height: 50px;
`;
export const MobileNav = styled.button.attrs({ type: 'button' })`
  font-size: 1.5rem;
  color: black;
  border: none;
  background: none;
  cursor: pointer;
  ${({ transition }) => {
    if (transition) {
      return css``;
    } else {
      return css`
        animation: closeModal 0.4s ease-out forwards;
      `;
    }
  }}

  @keyframes closeModal {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-50%);
    }
    100% {
      transform: translateY(0);
    }
  }
  ${breakUp.desktop({ display: 'none' })}
`;
export const LogoTitle = styled.span``;

export const NavItem = styled(Link)`
  font-weight: 400;
  position: relative;
  &:not(:last-child) {
    margin-right: 32px;
  }

  &::before {
    position: absolute;
    display: block;
    height: 5px;
    background: linear-gradient(
      to right,
      ${setColor.limeGreen},
      ${setColor.birghtCyan}
    );
    left: 0;
    right: 0;
    bottom: -30px;
    content: '';
    opacity: 0;
    transition: opacity 300ms ease-in-out;
  }

  &:hover {
    color: ${setColor.signature};
    transition: color 300ms ease-in-out;

    &::before {
      opacity: 1;
    }
  }
`;

export const NavMenu = styled.div`
  ${breakDown.desktop({ display: 'none' })}
  margin-left:50px;
`;

export const Button = styled.a.attrs({ type: 'button' })`
  background: gray;
  border: none;
  padding: 0.875rem 2.1875rem;
  border-radius: 50px;
  cursor: pointer;
  background: linear-gradient(
    to right,
    ${setColor.limeGreen},
    ${setColor.birghtCyan}
  );

  transition: opactiy 300ms ease-in-out;
  &:hover {
    opacity: 0.75;
  }
  color: white;
  font-weight: 700;
  ${breakDown.desktop({ display: 'none' })}
`;
