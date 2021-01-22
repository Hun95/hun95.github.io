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
} from './style';
import { GiHamburgerMenu } from 'react-icons/gi';
import { menuData } from '../../data/MenuData';
import { AiOutlineClose } from 'react-icons/ai';
import { Prev } from 'react-bootstrap/esm/PageItem';

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
  console.log(animation);
  return (
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
        <Button>Request invite</Button>
      </Nav>
    </NavContainer>
  );
};

export default Header;
