import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'gatsby';
import logo from '../../images/logo.webp';
import {
  Nav,
  NavTitle,
  LogoImg,
  NavItem,
  NavMenu,
  activeColor,
  LogoTitle,
  NavContainer,
  MobileNav,
  Button,
} from './style';
import { GiHamburgerMenu } from 'react-icons/gi';
import { menuData } from '../../data/MenuData';
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const [isHamburger, setIsHamburger] = useState(true);

  return (
    <NavContainer space>
      <Link to='/'>
        <LogoImg src={logo} />
      </Link>

      <MobileNav
        transition={isHamburger}
        onClick={() => setIsHamburger(!isHamburger)}
      >
        {isHamburger ? <GiHamburgerMenu /> : <AiOutlineClose />}
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
    </NavContainer>
  );
};

export default Header;
