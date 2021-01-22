import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
/*style in global */
import { setColor, breakDown, breakUp } from '../Global/Theme';
import { FlexBox } from '../Global/Styled';

/* icon */

export const Nav = styled(FlexBox)`
  padding: 1.0625rem 1.5px;
  align-items: center;
`;
export const NavContainer = styled.header`
  position: relative;
  z-index: 1;

  &.ModalClose > section {
    visibility: hidden;
  }
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
    if (transition === 'yes') {
      return css`
        animation: openModal 0.4s ease-out forwards;
      `;
    } else if (transition === 'no') {
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
  @keyframes openModal {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(50%);
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
  background: linear-gradient(to right, ${setColor.signature}, #ffb700);

  transition: opactiy 300ms ease-in-out;
  &:hover {
    opacity: 0.75;
  }
  color: white;
  font-weight: 700;
  ${breakDown.desktop({ display: 'none' })}
`;

export const MobileNavModal = styled.section`
  @keyframes fade-in {
    from {
      visibility: hidden;
      opcaity: 0;
    }
    1% {
      visibility: visible;
      opacity: 0;
    }
    to {
      visibility: visible;
      opacity: 1;
    }
  }

  @keyframes fade-out {
    from {
      visibility: visible;
      opcaity: 1;
    }
    99% {
      visibility: visible;
      opacity: 0;
    }
    to {
      visibility: hidden;
      opacity: 0;
    }
  }
  position: fixed;

  top: 5.575rem;
  right: 0px;
  left: 0px;
  bottom: 0px;
  background-image: linear-gradient(${setColor.darkBlue}, transparent);
  ${({ open }) => {
    if (open === 'yes') {
      return css`
        animation: fade-in 300ms ease-in-out forwards;
      `;
    } else if (open === 'no') {
      return css`
        animation: fade-out 300ms ease-in-out forwards;
      `;
    }
  }}/* &.openAnima {
    animation: fade-in 2s ease-in-out forwards;
  }

  &.closeAnima {
    animation: fade-out 2s ease-in-out forwards;
  } */
`;

// animation
