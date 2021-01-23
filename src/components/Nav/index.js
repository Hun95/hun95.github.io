import React, { useRef, useEffect, useState, useMemo } from 'react';
import { Link } from 'gatsby';

import logo from '../../images/logo.webp';
import {
  NavContainer,
  NavTitle,
  LogoImg,
  NavItem,
  NavMenu,
  activeColor,
  LogoTitle,
  Nav,
  MobileNav,
  Button,
  MobileNavModal,
  MobileItem,
  MobileMenu,
} from './style';
import { GiHamburgerMenu } from 'react-icons/gi';
import { menuData } from '../../data/MenuData';
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const [isHamburger, setIsHamburger] = useState({
    boolean: true,
    animation: null,
  });

  const { boolean, animation } = isHamburger;
  const handleChange = prevState => {
    setIsHamburger({
      ...prevState,
      boolean: !boolean,
      animation: boolean ? 'yes' : 'no',
    });
  };
  console.log(boolean);
  return (
    <>
      <NavContainer className={boolean ? 'ModalClose' : ' '}>
        <MobileNavModal open={animation}></MobileNavModal>
        <Nav space>
          <Link to='/'>
            <LogoImg src={logo} />
          </Link>

          <MobileNav
            transition={animation}
            onClick={isHamburger => handleChange(isHamburger)}
          >
            {boolean ? <GiHamburgerMenu /> : <AiOutlineClose />}
          </MobileNav>

          <NavMenu>
            {menuData.map((item, index) => (
              <NavItem
                to={item.link}
                key={index}
                activeStyle={activeColor}
                partiallyActive={true}
              >
                {item.mobileTitle}
              </NavItem>
            ))}
          </NavMenu>
          <Button>함께 하기</Button>
        </Nav>
      </NavContainer>

      {!boolean && (
        <MobileMenu>
          {menuData.map((item, index) => (
            <MobileItem
              to={item.link}
              key={index}
              activeStyle={activeColor}
              partiallyActive={true}
            >
              {item.mobileTitle}
            </MobileItem>
          ))}
        </MobileMenu>
      )}
    </>
  );
};

export default Header;
